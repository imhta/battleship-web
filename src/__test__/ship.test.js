/* eslint-disable no-undef */
import Ship from '../lib/ship';

it('checks ship generation', () => {
  const newShip = Ship(5, 0, 5);
  expect(newShip).toHaveLength(5);
  expect(newShip.positions.join('')).toEqual('01234');
});

it('checks hit ship', () => {
  const newShip = Ship(5, 0, 5);
  expect(newShip.hit()).toEqual(1);
});

it('checks hit ship', () => {
  const newShip = Ship(3, 0, 3);
  newShip.hit();
  newShip.hit();
  newShip.hit();
  expect(newShip.isSunk()).toBeTruthy();
});