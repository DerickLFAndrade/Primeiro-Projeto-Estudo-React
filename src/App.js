import React from "react";



class App extends React.Component {

  state = {
    nome: ''
  }

  modificaNome = (e) => {
    this.setState({
      nome:  e.target.value
    })
  }

  render(){
    return (
      <div className="App">
        <h1>Hello {this.state.nome}</h1>
        <h2> Digite alguma coisa:</h2>
        <input type="text" placeholder="Alguma coisa" className="input" value={this.state.nome} onChange={this.modificaNome}></input>
      </div>
    )
  }
}

export default App;
