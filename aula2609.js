//1° atividade
/*const filme = {
    direção : 'Chris Columbus',
    filmeN : 'HP A Camara Secreta',
    lançamento : 2001,
    elenco: ['Daniel Radcliffe', 'Emma watson' ,'Rupert Grint'],
    assistiu: true
}

console.log(filme.direção)
console.log(filme.filmeN)
console.log(filme.lançamento)
console.log(filme['elenco'])
console.log(filme["assistiu"])*/


//2° atividade
const people = {
    nome: 'Harley',
    idade: 16,
    musica: 'rock alternativo'
}

/*console.log(`O nome da pessoa é, ${people.nome} ,ela tem ${people.idade}, anos e gosta muito de, ${people.musica}`)
//pode ser com aspas,mas tem que colocar virgula antes e depois do nome do objeto*/



//3° atividade
 /*filme.personagem = ['Harry','Ermione','Rony']

console.log(`personagem principal, ${filme.elenco[0]}, como ${filme.personagem[0]}, personagem secundario ${filme.elenco[1]},como ${filme.personagem[1]}, personagem secundario ${filme.elenco[2]}, como ${filme.personagem[2]}`)//não precisava escrever, poderia por um do lado do outro.

filme.elenco[0]="xuxa"
console.log(filme.direção)
console.log(filme.filmeN)
console.log(filme.lançamento)
console.log(filme['elenco'])
console.log(filme["assistiu"])*/



//4° atividade
function copia(people){
 const novaPeople = {
    ...people,
    comidasfav: ['lasanha','donuts'],
    amigo: { 
        nomeAmigo: "Ana",
        idadeAmigo: 16
    }
 }

 console.log(`O nome da pessoa é ${people.nome} e suas comidas preferidas são ${novaPeople.comidasfav}. Seu melhor amigo se chama ${novaPeople.amigo.nomeAmigo} e tem ${novaPeople.amigo.idadeAmigo} anos.`)
}
copia(people)