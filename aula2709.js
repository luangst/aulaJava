//1° Atividade
/*const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])//Matheus Nachtergaele
console.log(filme.elenco[filme.elenco.length - 1])//Virginia Cavendish
console.log(filme.transmissoesHoje[2])//globo*/



//2°atividade
/*const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)//'Juca',3,'SRD'
console.log(gato)//'Juba',3,'SRD'
console.log(tartaruga)//'Jubo',3,'SRD'*/
//b)faz a copia do objeto anterior e muda o que for pedido



//3° atividade
/*function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))//o valor determinado para 'backender' é falso
console.log(minhaFuncao(pessoa, "altura"))//saira undefined pois a altura não é citada nem na função e no objeto*/



//1°Atividade escrita
/*const pessoa = {
    nome: 'Maria Eduarda',
    apelidos: ['Maria','Dudinha','Duda']
}
console.log(pessoa.nome)
console.log(pessoa.apelidos)

function people(pessoa){
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}`)
}
people(pessoa)

const novaPessoa = {
    ...pessoa,
    apelidos:['m&m','dudão','mariazinha']
}
people(novaPessoa)*/



//2° atividade escrita
/*const obj1 = {
    nome:'Luiz',
    idade:19,
    profissão:'Musicista'
}

const obj2 = {
    nome:'Rebeca',
    idade:28,
    profissão:'Arquiteta'
}

function objetos(obj1) {
    const resultado= [obj1.nome , obj1.nome.length , obj1.idade , obj1.profissão , obj1.profissão.length]
    return resultado
}
console.log(objetos(obj1))

function objetos(obj2){
const resultado= [obj2.nome , obj2.nome.length , obj2.idade , obj2.profissão , obj2.profissão.length]
return resultado
}
console.log(objetos(obj2))*/



//3° atividade
/*const carrinho= []

const fruta1 = {
    nome: 'Maça',
    dispo: true
}

const fruta2 = {
    nome: 'Banana',
    dispo: true
}

const fruta3 = {
    nome: 'Abacaxi',
    dispo: true
}

carrinho.push(fruta1)
carrinho.push(fruta2)
carrinho.push(fruta3)
console.log(carrinho)*/



//desafio
let nome= prompt ("Qual o seu nome?")
let idade= prompt("Qual a sua idade?")
let profissão= prompt ("Qual a sua profissão?")

const pessoa= {
 nome: nome,
 idade: idade,
 profissão: profissão
}
console.log(`nome ${pessoa.nome}, profissão ${pessoa.profissão},idade ${pessoa.idade}`)

var a= typeof pessoa
console.log(a)