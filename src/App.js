import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderClass from './components/Header'
import Counter from './components/Counter';

//component class
class App extends Component {
  state ={
    nama : 'Aufal',
    kelas : 12 
  }

  render() {
    return (
      <div>
        <Counter name="Budi"/>
        <Counter name="Aufal"/>
        <Counter name="Marom"/>
        <Counter name="Arrozi"/>
        <Counter name="Moh"/>
      </div>
    );
  }
}

export default App;
