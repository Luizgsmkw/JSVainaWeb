// Crie um objeto que receba ao menos três propriedades sobre você.

let sobreMim = {
    nome: "Luiz",
    idade: 26,
    cidade: "Belo Horizonte"
}

// Adicione uma nova propriedade sem alterar seu objeto inicial.

sobreMim.sobrenome = "Martins"

// Remova uma propriedade desse objeto.

delete sobreMim.cidade

//Mostre no console todas as propriedades desse objeto.

console.log(sobreMim)

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 

let cadastro = [{}, {}, {}, {}, {}]

//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
cadastro = [
    {
        nome: "Carlos",
        idade: 22,
        telefone: "(31) 98702-3011",
        amigos: ["João", "Carlos", "David"]
    },
    {
        nome: "Luana",
        idade: 32,
        telefone: "(21) 98602-5011",
        amigos: ["Jennifer", "Caio", "Davi"]
    },
    {
        nome: "Juan",
        idade: 28,
        telefone: "(41) 97652-5013",
        amigos: ["Bruna", "Luiz", "Daila"]
    },
    {
        nome: "Maria",
        idade: 23,
        telefone: "(41) 97652-5013",
        amigos: ["Breno", "Luiza", "Barbara"]
    },
    {
        nome: "Jorge",
        idade: 32,
        telefone: "(31) 99152-3313",
        amigos: ["Carol", "Lucas", "Marlon"]
    }
]

console.log(cadastro)

//Na propriedade amigos, adicione ao menos 4 itens.

cadastro[2].amigos.unshift("Lucas", "Junior", "Márcio", "Arthur")

console.log(cadastro)

// Mostre no console o nome de um amigo de cada lista.

console.log(cadastro[0].amigos[0]);
console.log(cadastro[1].amigos[1]);
console.log(cadastro[2].amigos[3]);
console.log(cadastro[3].amigos[2]);
console.log(cadastro[4].amigos[0]);