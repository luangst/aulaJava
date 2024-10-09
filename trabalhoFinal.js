//MENU
let aAbrigos= []

let menu= prompt("Cadastrar abrigo, digite 1;  Listar abrigos, digite 2;    Procurar abrigo, digite 3;   Sair, digite 4.")
while(menu !== '4'){
switch (menu){
   case '1':
    cadastro()
    break
   case '2':
    listar()
    break
   case '3':
    procura()
    break
   case '4':
    break
   default:
    break
}
menu= prompt("Cadastrar abrigo, digite 1;  Listar abrigos, digite 2;    Procurar abrigo, digite 3;   Sair, digite 4.")
}


//RECEBER INFO ABRIGOS
//1
function cadastro(){
  let nomeAbrigo= prompt("Nome do abrigo que você quer cadastrar")
  let endereçoAbrigo= prompt("Endereço do abrigo")
  let telefoneAbrigo= Number(prompt("Numero de telefone do abrigo"))
  let capacidadeAbrigo= Number(prompt('Capacidade do abrigo'))
  let cidadeAbrigo= prompt("Cidade na qual o abrigo se localiza")
//obj abrigo
const abrigo= {
  Nome: nomeAbrigo,
  Endereço: endereçoAbrigo,
  Telefone: Number(telefoneAbrigo),
  Capacidade: Number(capacidadeAbrigo),
  Cidade: cidadeAbrigo,
  
}
aAbrigos.push(abrigo)
}


//LISTAR ABRIGO
//2
function listar(){
for(let i=0; i<aAbrigos.length ; i++){
let frase= (`Código ${[i]},
           Nome ${aAbrigos[i].Nome},
       Endereço ${aAbrigos[i].Endereço},
       Telefone ${aAbrigos[i].Telefone},
     Capacidade ${aAbrigos[i].Capacidade},
         Cidade ${aAbrigos[i].Cidade}`)    
alert(frase)
}
}


//PROCURAR ABRIGO
//3

function procura(){
  let abrigosCidade= []
let suaCidade= prompt('Qual a sua cidade?')
for(let i= 0; i<aAbrigos.length; i++){
 if(aAbrigos[i].Cidade===suaCidade){

abrigosCidade.push(aAbrigos[i])
}
}
for(let i=0; i<abrigosCidade.length; i++){
  let iAbrigo=(`${suaCidade},
                   codigo${i},
     nome do abrigo ${abrigosCidade[i].Nome},
           endereço ${abrigosCidade[i].Endereço},
           telefone ${abrigosCidade[i].Telefone},
         capacidade ${abrigosCidade[i].Capacidade},
             cidade ${abrigosCidade[i].Cidade}`)
               alert(iAbrigo)      
}
}