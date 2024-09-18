/*const bool1 = true
const bool2 = false
const bool3 = !bool2 //true

let resultado = bool1 && bool2
console.log("a. ", resultado) //false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) //false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)//true

console.log("d. ", typeof resultado) //boolean*/


/*let primeiroNumero = Number(prompt("Digite um numero!")) //add Number na frente do prompt
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)*/


/*let idadeUsuario = Number(prompt("Qual a sua idade?"))
let idadeAmigo = Number(prompt ("Qual a idade do seu amigo(a)"))

console.log("Sua idade é maior do que a do seu melhor amigo?", idadeUsuario>=idadeAmigo)
console.log("diferença de idade:", Number(idadeUsuario - idadeAmigo))*/ 


/*let numPar= Number(prompt("Insira um numero par"))
const resultado = Number(numPar/2)

console.log(resultado)//não notei um padrão

const restoDaDivisão= (numPar%2)
console.log(restoDaDivisão)*/


/*let idadeUsuario= Number(prompt("Qual a sua idade"))

const idadeMeses= idadeUsuario*12
resultado1 = idadeUsuario*12
console.log(resultado1)//192

const idadeDias= idadeUsuario*365
resultado2 = idadeUsuario*365
console.log(resultado2)//5844 (faltou quatro dias, por isso horas tmb deu diferente)

const idadeHoras= resultado2*24
resultado3 = resultado2*24
console.log(resultado3)//140256*/

let num1= Number(prompt("digite 1° num"))
let num2= Number(prompt("digite 2° num"))

const condição = num1>num2
console.log(condição)

const resultado = num1===num2
console.log(resultado)

const resultado1 = num1%num2===0
console.log(resultado1)

const resultado2 = num2%num1===0
console.log(resultado2)
