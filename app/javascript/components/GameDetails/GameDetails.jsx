import React from 'react';
import ScoreBoard from './ScoreBoard';
import GameInfo from './GameInfo';

const GameDetails = ({ gameState }) => {
  return (
    <div>
      <GameInfo gameState={gameState} />
      <ScoreBoard gameState={gameState} />
    </div>
  );
}

export default GameDetails;