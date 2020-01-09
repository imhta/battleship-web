const BoardComponent = (board, isComputer = false) => {
    return `${JSON.stringify(board)} ${ isComputer ? 'computer' : 'human' }`;
};

export default BoardComponent;