_cli_methods=(init build deploy test run clean status logs help version)
_cli_flags=(--f --a --b --tolerancia --salida --tabla)

_trazo_complete() {
    local cur
    cur=${words[2]}

    reply=(${_cli_methods} ${_cli_flags})
}

compdef _trazo_complete trazo