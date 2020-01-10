/* eslint-disable no-undef */
import HumanPlayer from '../lib/humanPlayer';
import GameBoard from '../lib/gameboard';

it('check player attack', () => {
  const enemyBoard = GameBoard();
  const humanPlayer = HumanPlayer({ enemyBoard });
  humanPlayer.attack(5);
  expect(enemyBoard.everyAttack()[0]).toEqual(5);
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
