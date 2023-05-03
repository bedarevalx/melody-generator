import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ChordSelect from './components/ChordSelect';
import { AudioController } from './audio.controller';

function App() {
  const controller = new AudioController();
  const [firstChord, setFirstChord] = useState('Cmaj');
  const [secondChord, setSecondChord] = useState('Cmaj');
  const [thirdChord, setThirdChord] = useState('Cmaj');
  const [fourthChord, setFourthChord] = useState('Cmaj');

  const handlePlay = () => {
    controller.startMelody([firstChord, secondChord, thirdChord, fourthChord]);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <ChordSelect
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setFirstChord(e.target.value)
          }
        />
        <ChordSelect
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setSecondChord(e.target.value)
          }
        />
        <ChordSelect
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setThirdChord(e.target.value)
          }
        />
        <ChordSelect
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setFourthChord(e.target.value)
          }
        />
        <button onClick={handlePlay}>Play</button>
      </header>
    </div>
  );
}

export default App;
