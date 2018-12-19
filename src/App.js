import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor (props){
    super(props)
    this.generarAleatorio = this.generarAleatorio.bind(this);
    this.state = {
      numero: 0
    }
  }

  render() {
    return (
      <div>
        <p>Número aleatorio: {this.state.numero}</p>
        <button onClick={this.generarAleatorio}>Generar número aleatorio</button>
      </div>
    );
  }

  generarAleatorio() {
    const v=Math.trunc(Math.random()*10);
    this.setState( {
      numero: v
    })
  }

}

export default App;
