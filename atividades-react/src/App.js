
/*



// 📌Prática React 01 - Renderizando um state

import React, {Component} from "react";
import images from "./img/images.jpg"
  
// Crie uma class component 

 export default class AtividadeReact01 extends Component{

// Guarde em um state as seguintes propriedades: nome, idade, comida favorita, e uma array com pelo menos 3 músicas.

  state = {
    nome: "Luiz",
    idade: 26,
    comidaFavorita: "poke",
    musicas: ["Jesus Chorou - Racionais", "Tatuagem - Chico Buarque", "Que he sacado con quererte- Violeta Parra"],
    img: 'https://i.pinimg.com/236x/a2/c8/36/a2c8367fbe8fd0c554ffa1d424745844.jpg'
  }

// Renderize na tela:
  render() {
    return(
      <div>
        
        <h1>Seu nome: {this.state.nome}</h1>
      
        <h2>Sua idade: {this.state.idade}</h2>
        
        <h3>Comida favorita: {this.state.comidaFavorita}</h3>
        <h2>Musicas favoritas:</h2>
        
        <ul>
          <li>{this.state.musicas[0]}</li>
          <li>{this.state.musicas[1]}</li>
          <li>{this.state.musicas[2]}</li>
        </ul>
     
         <img src={images}/>
         <img src={this.state.img}/>
      </div>
    )
  }


 }


*/


///////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

/*
//📌 Prática React 02 - Component de Class
// Crie um Component de class que retorne uma frase na tela
import React, {Component} from 'react'

class Frase1 extends Component {

  state = {
    frase: "Sempre em movimento é o Futuro"
  }

  render(){
    return(
      <div>
        <h1>{this.state.frase}</h1>
      </div>
    )
  }

}

export default Frase1;

*/


///////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////





//📌 Prática React 03 - Component de function

/*
import React from "react";


function Frase2(){
  const frase = "Fazer ou não fazer. Tentativa não há"
  return(
    <div>
      <h1>{frase}</h1>
    </div>
  )
}
export default Frase2;
*/




///////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////







//   📌 Prática React 04 - Arrow Function


//Crie um component de class

/*
import React, {Component} from "react";

class Atividade4 extends Component {

  // Crie uma arrow function que receba uma mensagem e exiba na tela
  Mensagem = (frase) => ( `${frase}`)

  // Crie uma arrow function que retorne o dobro de um número e exiba na tela

  Dobro = (n1) => (n1 * 2)

  render(){
    return(
      <div>
        <h1>{this.Mensagem('"Quando o mundo vira as costas para você, você vira as costas para o mundo." - Timão')}</h1>
        <h2>{this.Dobro(5)}</h2>
      </div>
    )
  }

}

export default Atividade4

*/





//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////






// 📌 Prática React 05 - Map()






//Crie um component de class

import React, {Component} from "react"
class Pessoa extends Component {

  //Crie um array de objetos no STATE com pelo menos 6 objetos

  state = {
    pessoas: [
      {nome: "Lucas", idade: 32, cidade: "São Paulo"},
      {nome: "Fernanda", idade: 25, cidade: "Belo Horizonte"},
      {nome: "Joana", idade: 20, cidade: "São Paulo"},
      {nome: "Juliano", idade: 35, cidade: "Rio de Janeiro"},
      {nome: "Carlos", idade: 19, cidade: "Ouro Preto"},
      {nome: "Amanda", idade:32, cidade: "Cabo Frio" }
    ]
  }

  //Faça um map do seu state e exiba os dados na tela
  render(){
    return(
      <div>
        {this.state.pessoas.map((item) => (
          <p>Meu nome é {item.nome}, tenho {item.idade} e moro na cidade de {item.cidade}</p>
        ))}
      </div>
    )
  }



}

export default Pessoa;