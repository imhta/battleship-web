/* eslint-disable no-alert */
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
  if (Number(target.id) >= 0 || Number(target.id) <= 99) {
    if (humanPlayer.isWon() || computerPlayer.isWon()) {
      alert(humanPlayer.isWon() ? 'Human you won!' : 'You lost with machine');
    } else {
      humanPlayer.attack(Number(target.id));
      if (humanPlayer.isWon()) alert('Human you won!');
      computerPlayer.attack();
      if (computerPlayer.isWon()) alert('You lost with machine');
      UI.update(computerPlayerBoard, humanPlayerBoard);
    }
  }
});
