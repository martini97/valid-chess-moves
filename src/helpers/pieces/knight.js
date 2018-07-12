import Piece from './piece';

/**
 * Class representing a Knight piece.
 * @extends Piece
 */
class Knight extends Piece {
  rules() {
    const [column, row] = this.coordinates;
    return [
      [column + 2, row + 1],
      [column + 2, row - 1],
      [column - 2, row - 1],
      [column - 2, row + 1],
      [column + 1, row + 2],
      [column + 1, row - 2],
      [column - 1, row - 2],
      [column - 1, row + 2],
    ];
  }
}

export default Knight;
