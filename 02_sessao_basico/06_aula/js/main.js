let dataAtual = new Date()
let dataNasc = new Date(1987, 11, 26, 0, 0, 0)
let diff = dataAtual.getFullYear() - dataNasc.getFullYear()
let old = Math.round(diff)

console.log("Data Atual:", dataAtual, "Data Nascimento:", dataNasc, "Idade:", old)