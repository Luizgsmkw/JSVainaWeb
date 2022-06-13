//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18
let idade = 26;
if(idade > 18) {
    console.log("Você é maior de idade")
} 
//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true
let idade2 = 27;
let humano = true;
if(idade > 18 && humano === true) {
    console.log("Você é maior de idade e pertence a raça humana");
}

//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro
let aniversario = "dezembro";
if(aniversario === "dezembro" || aniversario === "janeiro") {
    console.log("Parabéns seu aniversário é esse mês ");
}
//*** Exercícios bônus
//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R
let nome = "Roberto";
if(nome[0] === "R") {
    console.log("Seu nome começa com a letra R")
}
//5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E
let nome2 = "Luiz";
let sobrenome = "Gustavo"
if(sobrenome.length > 5 || nome2[0] === "E" ) {
    console.log("Seu sobronome tem mais do que 6 letras ou seu nome começa com E")
}