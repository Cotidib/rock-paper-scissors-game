import React from 'react';
import Start from './components/stages/Start.js';
import Choose from './components/stages/Choose.js';
import Compare from './components/stages/Compare.js';
import ScoreBoard from './components/ScoreBoard.js';
import { useGlobalContext } from './context.js';

function App() {
  const {start, playerPick} = useGlobalContext();

  return (
    <main>
      {start && <ScoreBoard />}
      {start && <Choose />}
      {playerPick && <Compare />}
      {!start && <Start />}
      <button className='rules-btn'>rules</button>
    </main>
  );
}

export default App;
