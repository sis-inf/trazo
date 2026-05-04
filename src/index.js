import bisection from './no-lineales/bisection.js';

const res = bisection('x^2 - 2', 0, 2); 

if (res) {
    console.log("Raíz encontrada:", res.root);
    console.table(res.steps); 
}