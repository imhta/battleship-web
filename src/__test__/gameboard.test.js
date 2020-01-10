/* eslint-disable no-undef */
import GameBoard from '../lib/gameboard';

it('check receiveAttack function', () => {
  const gameBoard = GameBoard();
  gameBoard.receiveAttack(5);
  expect(gameBoard.everyAttack()).toHaveLength(1);
});

it('check isAllSunk function', () => {
  const gameBoard = GameBoard();
  gameBoard.receiveAttack(5);
  expect(gameBoard.isAllSunk()).toBeFalsy();
});