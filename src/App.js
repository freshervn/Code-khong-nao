import linkAvatar from './images/mikasa.jpg';
import './App.css';
import Counters from './components/counters';
import NavBar from './components/navbar';
import React, { Component } from 'react';
class App extends Component {
  render(){
    return (
      <React.Fragment>
        <NavBar />
        <header className="App-header">
            <h1>Đạt js</h1>
            <img src={linkAvatar} className="App-logo" alt="logo" />        
        </header>
        <main className='container'>
          <Counters/>
        </main>
      </React.Fragment>
    );
  }
}
export default App;