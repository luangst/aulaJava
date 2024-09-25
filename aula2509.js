/*function minhaFuncao(variavel) {
	return variavel * 5
}

//console.log(minhaFuncao(2)) //vai fazer multiplicação, e vai retornar 10
//console.log(minhaFuncao(10))//50
 minhaFuncao(2) //não ira aparecer nada, mas por conta do return o calculo sera feito
 minhaFuncao(10)*/


 /*let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}
const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

//essa função ira pegar o que o usuário escreveu e o colocara inteiramente em minusculo e vai procurar se em algum momento o usuario citou ou não cenoura


     /*i.   `Eu gosto de cenoura`// true
     ii.  `CENOURA é bom pra vista`// true
     iii. `Cenouras crescem na terra`// true*/


/*const nome = 'Luisa'
const idade = (Number(16))
const cidade = 'São Leopoldo'
const estudos = 'sou estudante'

 function imprimirMensagem(){
    let frase=(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e ${estudos}`)
    console.log(frase)
}
imprimirMensagem()*/


/*let nome = prompt("Qual o seu nome?")
let idade = (Number(prompt("Qual a sua idade?")))
let cidade = prompt("Sua cidade?")
let profissão = prompt ("O que você faz?")

function imprimirMensagem2(nome, idade, cidade, profissão) {
    let frase=(`Eu sou ${nome}, tenho ${idade}, moro em ${cidade} e sou ${profissão}`)
console.log(frase)
}

imprimirMensagem2()*/

/*const num1= 2
const num2= 28
 function somar(num1,num2 ){
  const Soma = num1 + num2
   return Soma
}

somar(num1,num2)
console.log(somar(num1,num2))*/



/*const n1= 12
const n2= 15
function booLe(n1,n2){
    const buoLe= n1 >= n2 
    return buoLe
}

booLe(n1,n2)
console.log(booLe(n1,n2))*/



/*let numeroz= 18
function parz(numeroz){
    const par= numeroz%2===0
    return par
}

parz(numeroz)
console.log(parz(numeroz))*/



/*const mem="Eu gosto de unicórnios"
function mensagem(mem){
    let frase= mem
  
    console.log(frase.toUpperCase() , frase.length)
}

mensagem(mem)*/


let num1= Number(prompt("insira um numero"))
let num2 = Number(prompt ("insira outro numero"))

function soma(num1, num2){
let somar= num1 + num2
console.log(somar)
}
soma(num1, num2)


function subs(num1,num2){
let subtrair= num1 - num2
console.log(subtrair)
}
subs(num1,num2)


function multi(num1,num2){
let multiplicar= num1 * num2
console.log(multiplicar)
}
multi(num1,num2)


function div(num1,num2){
let divisão= num1/num2
console.log(divisão)
}
div(num1,num2)