/* eslint-disable no-undef */
import HumanPlayer from '../lib/humanPlayer';
import GameBoard from '../lib/gameboard';
import Player from '../lib/player';
import ComputerPlayer from '../lib/computerPlayer';

it('check player move', () => {
  const enemyBoard = GameBoard();
  const player = Player({ enemyBoard });
  expect(player.incrementMove()).toEqual(1);
});

it('check player attack', () => {
  const enemyBoard = GameBoard();
  const humanPlayer = HumanPlayer({ enemyBoard });
  humanPlayer.attack(5);
  expect(enemyBoard.everyAttack()[0]).toEqual(5);
});

it('check computer player attack', () => {
  const enemyBoard = GameBoard();
  const computerPlayer = ComputerPlayer({ enemyBoard });
  computerPlayer.attack();
  expect(enemyBoard.everyAttack().length).toEqual(1);
});

it('check player isWon', () => {
  const enemyBoard = GameBoard();
  const humanPlayer = HumanPlayer({ enemyBoard });
  humanPlayer.attack(5);
  expect(humanPlayer.isWon()).toBeFalsy();
});

it('check player isWon true', () => {
  const enemyBoard = GameBoard();
  const humanPlayer = HumanPlayer({ enemyBoard });
  enemyBoard.occupied.forEach((val, index) => {
    humanPlayer.attack(val);
    if (index === enemyBoard.occupied.length - 1) {
      return expect(humanPlayer.isWon()).toBeTruthy();
    }
    return false;
  });
});
