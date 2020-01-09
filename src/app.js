import './style/style.scss';
import HumanPlayer from './lib/humanPlayer';
import GameBoard from './lib/gameboard';
import ComputerPlayer from './lib/computerPlayer';
import UIController from './controller/UI.controller';

const humanPlayerBoard = GameBoard();
const computerPlayerBoard = GameBoard();

const humanPlayer = HumanPlayer({ enemyBoard: computerPlayerBoard });
const computerPlayer = ComputerPlayer({ enemyBoard: humanPlayerBoard });

const UI = UIController({ humanPlayerBoard, computerPlayerBoard });

const computerBoardElement = document.getElementById('computer-player-board');

computerBoardElement.addEventListener('click', ({ target }) => {
    console.log(target.id);
  humanPlayer.attack(Number(target.id));
  computerPlayer.attack();
  UI.update(computerPlayerBoard, humanPlayerBoard);
});
