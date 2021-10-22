import React from "react";


export default class App extends React.Component {
  state = {
    nome: ''
   
  }
  mod = (e) => {
    this.setState({
      nome: e.target.value
    }) 
  }

criarComponente = () => {
  const ops = ['Derick', 'Ellen']
  const tdops = ops.map(op => <option>{op}</option>)

  return (
    <select>{tdops}</select>
  )
}


    render() {
      const NovoComp = () => this.criarComponente();
      return (
        <>
        <h1>Hello World</h1>
        <input  type="text" value={this.state.nome} onChange={'click', this.mod}></input>
        <h1>{this.state.nome}</h1>
          <NovoComp />
        </>
      )
    }
} 