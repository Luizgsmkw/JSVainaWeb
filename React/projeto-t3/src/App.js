// Prática React 01 - Renderizando um state

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
        {/* Seu nome em um h1 */}
        <h1>Seu nome: {this.state.nome}</h1>
        {/* Sua idade em um h2 */}
        <h2>Sua idade: {this.state.idade}</h2>
        {/* Sua comida favorita em um h3 */}
        <h3>Comida favorita: {this.state.comidaFavorita}</h3>
        <h2>Musicas favoritas:</h2>
        {/* Suas músicas favoritas em uma lista (ul / ol) */}
        <ul>
          <li>{this.state.musicas[0]}</li>
          <li>{this.state.musicas[1]}</li>
          <li>{this.state.musicas[2]}</li>
        </ul>
        {/* **Bônus
         Adicione uma imagem da sua fruta favorita via import */}
         <img src={images}/>
         <img src={this.state.img}/>
      </div>
    )
  }


 }