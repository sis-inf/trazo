import fs from "fs";

console.log("🚀 Ejecutando benchmark...");

const ITERATIONS = 10000;
function raizNewton(f, df, x0, iteraciones) {
  let x = x0;

  for (let i = 0; i < iteraciones; i++) {
    x = x - f(x) / df(x);
  }

  return x;
}

function interpolar(x0, y0, x1, y1, x) {
  return y0 + (y1 - y0) * ((x - x0) / (x1 - x0));
}

function integrar(f, a, b, n) {
  const h = (b - a) / n;

  let suma = 0.5 * (f(a) + f(b));

  for (let i = 1; i < n; i++) {
    suma += f(a + i * h);
  }

  return suma * h;
}
// Función de benchmarking
function benchmark(fn) {
  const start = process.hrtime.bigint();

  for (let i = 0; i < ITERATIONS; i++) {
    fn();
  }

  const end = process.hrtime.bigint();

  const duration = Number(end - start);

  // tiempo promedio en microsegundos
  return duration / ITERATIONS / 1000;
}

// Generar contenido Markdown
function generateMarkdown(results) {
  let md = "# Benchmarks\n\n";
  md += "| Método | Tiempo promedio (µs) |\n";
  md += "|---------|---------------------|\n";

  results.forEach(({ Metodo, "Tiempo (µs)": tiempo }) => {
    md += `| ${Metodo} | ${tiempo} |\n`;
  });

  return md;
}

// Ejecutar benchmarks
function runBenchmarks() {
  const results = [
    {
      Metodo: "raizNewton",
      "Tiempo (µs)": benchmark(() =>
        raizNewton(
          x => x * x - 9,
          x => 2 * x,
          3,
          5
        )
      ).toFixed(4),
    },
    {
      Metodo: "interpolar",
      "Tiempo (µs)": benchmark(() =>
        interpolar(1, 2, 3, 6, 2)
      ).toFixed(4),
    },
    {
      Metodo: "integrar",
      "Tiempo (µs)": benchmark(() =>
        integrar(
          x => x * x,
          0,
          2,
          100
        )
      ).toFixed(4),
    },
  ];

  console.table(results);

  // Crear carpeta docs si no existe
  if (!fs.existsSync("docs")) {
    fs.mkdirSync("docs", { recursive: true });
  }

  const markdown = generateMarkdown(results);

  fs.writeFileSync(
    "docs/benchmarks.md",
    markdown,
    "utf8"
  );

  console.log("✅ Resultados guardados en docs/benchmarks.md");
}

runBenchmarks();