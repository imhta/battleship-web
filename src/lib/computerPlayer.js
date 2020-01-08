import GameBoard from './gameboard';
import Player from './player';

const ComputerPlayer = (() => {
  const enemyBoard = GameBoard();
  const PlayerUtil = Player();
  const { isWon } = PlayerUtil;
  const generateRandomTarget = () => {
    let tryCentTimes = 100;
    while (tryCentTimes) {
      const randomTarget = Number(
        [enemyBoard.randomUnder(10), enemyBoard.randomUnder(10)].join(''),
      );
      if (enemyBoard.everyAttack().indexOf(randomTarget) === -1) return randomTarget;
      tryCentTimes -= 1;
    }
    return 0;
  };
  const attack = () => {
    PlayerUtil.incrementMove();
    enemyBoard.receiveAttack(generateRandomTarget());
  };
  return {
    attack,
    isWon,
  };
})();

export default ComputerPlayer;
