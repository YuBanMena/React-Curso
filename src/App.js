import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const siglo=21;
    const persona = {
      nombre:'Juan',
      edad: 34
    }


    return (
      <div>
        <h1>Título Nivel 1</h1> 
        <hr/>
      <p>Estamos en el siglo {siglo}</p>
      <h3>Acceso a un objeto</h3>
      <p>{persona.nombre} tiene {persona.edad} años</p>
      <p>Un valor aleatorio llamado a un método</p>
      {this.retornarAleatorio()}
      <h3>Calculo inmediato de Expresiones</h3>
      3+3={3+3}
      </div>
    );
  }

  retornarAleatorio() {
    return Math.trunc(Math.random() * 10);
  }

}

export default App;
