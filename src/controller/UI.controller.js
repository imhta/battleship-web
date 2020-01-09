import BoardComponent from '../components/board.component';

const UIController = ({ humanPlayerBoard, computerPlayerBoard }) => {
  const computerPlayerBoardElement = document.getElementById('computer-player-board');
  const humanPlayerBoardElement = document.getElementById('human-player-board');

  computerPlayerBoardElement.innerHTML = BoardComponent(computerPlayerBoard);
  humanPlayerBoardElement.innerHTML = BoardComponent(humanPlayerBoard, true);

  return {
    update(computerPlayerBoard, humanPlayerBoard) {
      computerPlayerBoardElement.innerHTML = BoardComponent(computerPlayerBoard);
      humanPlayerBoardElement.innerHTML = BoardComponent(humanPlayerBoard, true);
    },
  };
};

export default UIController;