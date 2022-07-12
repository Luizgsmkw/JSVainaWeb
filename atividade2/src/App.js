import React, {Component} from 'react'

class Frase1 extends Component {

  state = {
    frase: "Olá, mundo!!!"
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