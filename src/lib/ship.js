const Ship = (length, start, end) => {
  let hits = 0;
  const generateShip = (start, end) => {
    const newShip = [];
    for (let i = start; i < end; i += 1) {
      newShip.push(i);
    }
    return newShip;
  };
  const positions = generateShip(start, end);

  const isSunk = () => hits === length;
  const hit = () => {
    hits += 1;
    return hits;
  };
  return {
    length,
    positions,
    isSunk,
    hit,
  };
};

export default Ship;
