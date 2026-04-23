export function salvarResultado(novo) {
    const lista = JSON.parse(localStorage.getItem("resultados")) || []
    lista.push(novo)
    localStorage.setItem("resultados", JSON.stringify(lista))
}

export function listarResultados() {
    return JSON.parse(localStorage.getItem("resultados")) || []
}

export function buscarResultadoPorId(id) {
    const lista = listarResultados()
    return lista.find(r => r.id === id)
}