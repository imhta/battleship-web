import Ship from './ship';

const GameBoard = () => {
  const allShipsLength = [5, 4, 3, 3, 2];
  const occupied = [];
  const ships = [];
  const missed = [];
  const hits = [];

  occupied.mergeInPlace = (...ship) => ship.forEach(val => occupied.push(val));
  ships.findShip = (position) => ships.filter((val) => val.indexOf(position) >= 0)[0];
  const randomUnder = (max) => Math.floor(Math.random() * max);
  const placeShipRandom = (shipLength) => {
    const isPossible = (ship) => !ship.reduce(
      (acc, val) => acc && occupied.indexOf(val) >= 0,
      true,
    );
    let tryCentTimes = 100;
    while (tryCentTimes) {
      const randomStart = Number(
        [randomUnder(10), randomUnder(10 - shipLength)].join(''),
      );
      const randomNewShip = Ship(
        shipLength,
        randomStart,
        randomStart + shipLength,
      );
      if (isPossible(randomNewShip.positions)) {
        occupied.mergeInPlace(...randomNewShip.positions);
        ships.push(randomNewShip);
        break;
      }
      tryCentTimes -= 1;
    }
  };
  const randomBoardInit = () => {
    allShipsLength.forEach((shipLength) => {
      placeShipRandom(shipLength);
    });
  };
  const isAllSunk = () => ships.reduce(
    (acc, ship) => acc && ship.isSunk(),
    true,
  );
  const receiveAttack = (position) => {
    const allPreviousAttacks = [...missed, ...hits];
    if (allPreviousAttacks.indexOf(position) === -1) {
      if (occupied.indexOf(position) === -1) return missed.push(position);
      hits.push(position);
      ships.findShip(position).hit();
    }
    return false;
  };
  const everyAttack = () => [...missed, ...hits];
  const totalShipsLength = () => allShipsLength.reduce((acc, val) => acc + val);
  randomBoardInit();
  return {
    occupied,
    missed,
    hits,
    totalShipsLength,
    randomUnder,
    everyAttack,
    isAllSunk,
    receiveAttack,
  };
};

export default GameBoard;