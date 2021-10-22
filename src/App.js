import React from "react";


export default class App extends React.Component {
  
  criarObjeto = () => {
    const op1 = [0, 1, 2]
    const tds = op1.map(ob => <option>{ob}</option>)
    return (
      <>
      <select>{tds}</select>
      </>
    )
  }
  
  
  state = {
    valor: ''
   }
 
  

  enviar = () => {
    this.setState ({
      valor: this.criarObjeto()
    })
  }
  excluir = () => {
    this.setState ({
      valor: ''
    })
  }


  render() {

    return (
     
      <>
        <h1>Adicionar Elementos</h1>
        
        
        <button onClick={this.enviar}>Adicionar</button>
        <button onClick={this.excluir}>Excluir</button>
        <h1>{this.state.valor}</h1>
       
      </>
    )
  }
}