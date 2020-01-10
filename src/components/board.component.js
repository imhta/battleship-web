const BoardComponent = (board, isHuman = false) => {
  const templateArray = [...Array(10).keys()];
  const isThat = (state, className, cell) => (board[state].indexOf(cell) === -1 ? '' : className);
  let tableInnerHTML = '';
  templateArray.forEach((row) => {
    tableInnerHTML += '<tr>';
    templateArray.forEach((col) => {
      const cell = Number(`${row}${col}`);
      tableInnerHTML += `
      <td
         id='${row}${col}'
         class='cell
         ${isHuman ? isThat('occupied', 'ship', cell) : ''}
         ${isThat('missed', 'missed', cell)}
         ${isThat('hits', 'hit', cell)}
         '>
      </td>
      `;
    });
    tableInnerHTML += '</tr>';
  });
  return `
    <table id='${isHuman ? 'human-board' : 'computer-board'}'>
        ${tableInnerHTML}
    </table>
    `;
};

export default BoardComponent;