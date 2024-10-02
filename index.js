/*let numeros = Number(prompt('insira um numer ou 0 para sair'))
let soma = 0

while(numeros !== 0){//diferente de zero
 numeros = Number(prompt('insira um numer ou 0 para sair'))
  soma = soma + numeros
}
console.log(soma)*/
//enquanto a codição for verdadeira vai ser repetido



/*let lista=[10,39,16,24,26]
let mN= 0
function maiorNumero(array){
 for(let i= 0; i<array.length; i++){
if(mN<lista[i]){
mN = lista[i]
}
}
}
maiorNumero(lista)
console.log(mN)*/



let palavras= ["Bom","dia",",como","você","esta?"]
let frase = ''

function imprimir(palavras){
 for(let palavra of palavras){
  frase = frase + " " +palavra
 //pra fazer uma string de espaço, colocar aspas e dar espaço no meio delas
 }
}
imprimir(palavras)
console.log(frase)

