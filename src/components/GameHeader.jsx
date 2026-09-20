function GameHeader({ score, moves, onReset }) {
  return (
    <div className="game-header">
      <h1>Memory Card Game</h1>
      <div className="stats">
        <div className="score">
          <span>Score: </span> 
          <span id="score">{score}</span>
        </div>
        <div className="moves">
          <span>Moves: </span>
          <span id="moves">{moves}</span>
        </div>
      </div>
      <div className="newbtn">
        <button id="new-game-btn" onClick={onReset}>
          New Game
        </button>
      </div>
    </div>
  );
}
export default GameHeader;