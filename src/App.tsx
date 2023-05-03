import React from 'react';
import logo from './logo.svg';
import './App.css';
import ChordSelect from './components/ChordSelect';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <ChordSelect />
        <ChordSelect />
        <ChordSelect />
        <ChordSelect />
      </header>
    </div>
  );
}

export default App;
