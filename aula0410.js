/*let valor = 0
for (let i = 0 ; i<5 ; i++){
    valor += i// +=soma o valor apos o igual+ele msm
}

console.log(valor)//10*/



/*const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for(let numero of lista){
    if (numero>18)
console.log(numero) 
}
//a)sera exibido os numeros que são maiores que 18
//b)Não, pois ele ja pega o array inteiro e acessa todos os numeros que estão la dentro*/



/*const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
    let linha = " "
for(let asteriscos = 0; asteriscos< quantidadeAtual + 1; asteriscos++){
    linha += "*"//soma a quantidade linhas e de asteriscos
}
console.log(linha)
quantidadeAtual++
}
//oq sairia se o usuario digitar o numero 4?
//"*"
//"**"
//"***"
//"****"*/



/*let animais= Number(prompt("Quantos animais você tem?"))
let nome = []

if(animais===0) {
console.log("Que pena! Você pode adotar um pet")

}else{
for(let i = 0; i < animais ; i++) {
  let nomeAnimais= prompt("Qual o nome do(s) seu(s) pet(s)?")//pra repetir tem que estar dentro do laço
  nome.push(nomeAnimais)
}
}
console.log(nome)

//para treinar mais
for(let i=0; i<nome; i++){
  console.log(nome[i])}
  //teria que alterar mais coisas para fazer esse final*/


let arrayOriginal=[20,40,7,5,60,3,80]
let novo=[]

/*function funções(){
for (let array of arrayOriginal){
  console.log(array)
}
}
funções()//certo*/

/*function dividir(){
for(let i = 0;i<arrayOriginal.length; i++){
let divisão= arrayOriginal[i]/ 10
console.log(divisão)
}
}
dividir()//certo*/

/*function novoA(){
for(let i= 0;i<arrayOriginal.length; i++){
if(arrayOriginal[i]%2===0){
let par= arrayOriginal[i]
 novo.push(par)

}
}

}
console.log(novo)
novoA()*/

function arrayString(){
  arraza= []
  for(let i = 0; i<arrayOriginal.length; i++){
let frase= (`O elemento do índex ${i} é ${arrayOriginal[i]}`)
arraza.push(frase)

  }
}
arrayString()
console.log(arraza)



let valorMaximo= arrayOriginal[0];
let valorMinimo= arrayOriginal[0];

for(let i=0; i<arrayOriginal.length; i++){
  if(arrayOriginal[i]<valorMinimo){
    valorMinimo = arrayOriginal[i];
  }

  if(arrayOriginal[i]>valorMaximo){
    valorMaximo = arrayOriginal[i]
  }
}
console.log(`O maior número é ${valorMaximo} e o menor é ${valorMinimo}`)
