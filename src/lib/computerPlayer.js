import Player from './player';

const ComputerPlayer = ({ enemyBoard }) => {
  const PlayerUtil = Player(enemyBoard);
  const isWon = () => PlayerUtil.isWon();
  const generateRandomTarget = () => {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const randomTarget = Number(
        [enemyBoard.randomUnder(10), enemyBoard.randomUnder(10)].join(''),
      );
      if (enemyBoard.everyAttack().indexOf(randomTarget) === -1) return randomTarget;
    }
  };
  const attack = () => {
    PlayerUtil.incrementMove();
    enemyBoard.receiveAttack(generateRandomTarget());
  };
  return {
    attack,
    isWon,
  };
};

export default ComputerPlayer;
