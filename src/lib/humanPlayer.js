import Player from './player';

const HumanPlayer = ({ enemyBoard }) => {
  const PlayerUtil = Player(enemyBoard);
  const { isWon } = PlayerUtil;
  const attack = (position) => {
    PlayerUtil.incrementMove();
    enemyBoard.receiveAttack(position);
  };

  return {
    attack,
    isWon,
  };
};

export default HumanPlayer;
