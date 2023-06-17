var a = "Luz"
var b = 7
var c = "BRASIL"
var res = `    Dia ${b} de set, foi declarado a ${a} do país: ${c}!`

console.log("Tamanho da frase: ", res.length)
console.log(res.toUpperCase())
console.log(res.toLowerCase())
console.log(res.trim())
console.log(res.replace("declarado", "considerado"))
console.log("Inicio de frase: ", res.startsWith(" "), "\nFinal de frase: ", res.endsWith("u"))
console.log("Localizando na frase: ", res.includes("lugar"))
