import GameBoard from './gameboard';
import Player from './player';

const HumanPlayer = (() => {
  const enemyBoard = GameBoard();
  const PlayerUtil = Player();
  const { isWon } = PlayerUtil;
  const attack = (position) => {
    PlayerUtil.incrementMove();
    enemyBoard.receiveAttack(position);
  };

  return {
    attack,
    isWon,
  };
})();

export default HumanPlayer;
