const Player = enemyBoard => {
  let totalMoves = 0;
  const isWon = () => {
    if (totalMoves >= enemyBoard.totalShipsLength) {
      return enemyBoard.isAllSunk();
    }
    return false;
  };
  const incrementMove = () => {
    totalMoves += 1;
    return totalMoves;
  };
  return {
    totalMoves,
    isWon,
    incrementMove,
  };
};

export default Player;
