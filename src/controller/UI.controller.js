import BoardComponent from '../components/board.component';

const UIController = ({ humanPlayerBoard, computerPlayerBoard }) => {
  const computerPlayerBoardElement = document.getElementById('computer-player-board');
  const humanPlayerBoardElement = document.getElementById('human-player-board');

  computerPlayerBoardElement.innerHTML = BoardComponent(computerPlayerBoard, true);
  humanPlayerBoardElement.innerHTML = BoardComponent(humanPlayerBoard);

  return {
  };
};

export default UIController;