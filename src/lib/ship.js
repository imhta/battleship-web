const Ship = (length) => {
  this.length = length;

  const isHit = (number) => {
     return number;
  } 

  const isSunk = () => {
   return false;
  }

  return {
    isHit, isSunk, length 
  }
};

export default Ship;

//random for vertical and horizontal: as a function to return the direction
