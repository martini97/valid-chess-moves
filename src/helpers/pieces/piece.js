import { BadRequestError } from 'meaning-error';

/** Class representing a generic chess piece. */
class Piece {
  /**
   * Create a Piece.
   * @param {string} algebraicPosition - The position of the piece in algebraic notation.
   */
  constructor(algebraicPosition) {
    Piece.validateAlgebraicNotation(algebraicPosition);
    const [column, row] = Piece.fromAlgebraic(algebraicPosition);

    /**
    The column of the piece
    @type number
    */
    this.column = column;
    /**
    The row of the piece
    @type number
    */
    this.row = row;
  }

  /**
   * Validates if a position is in algebraic notation.
   * @param {string} algebraicPosition - The position of the piece in algebraic notation.
   * @throws {BadRequestError} Throws a BadRequestError if the given algebraicPosition
   * is invalid.
   */
  static validateAlgebraicNotation(algebraicPosition) {
    if (typeof algebraicPosition !== 'string'
          || !algebraicPosition.toLowerCase().match(/^[a-h][1-8]$/)) {
      throw new BadRequestError(
        'Invalid algebraic position',
        [{ field: 'algebraic', message: 'Param `algebraic` is invalid.' }],
      );
    }
  }

  /**
   * Converts from algebric notation to coordinates.
   * @param {string} algebraicPosition - The position of the piece in algebraic notation.
   * @returns {number[]} An array in the form [column, row]
   */
  static fromAlgebraic(algebraicPosition) {
    const [column, row] = algebraicPosition.toLowerCase().split('');
    return [column.charCodeAt(0) - 96, parseInt(row, 10)];
  }

  /**
   * Converts from coordinates to algebric notation.
   * @param {number} column - The column of the piece.
   * @param {number} row - The row of the piece.
   * @returns {string} The position of the piece in algebraic notation.
   */
  static toAlgebraic(column, row) {
    return `${String.fromCharCode(96 + column)}${parseInt(row, 10)}`;
  }

  /**
   * Checks if a given position is valid or not.
   * @param {number} column - The column of the piece.
   * @param {number} row - The row of the piece.
   * @returns {boolean} Whether or not the given position is legal.
   */
  static isLegalPosition(column, row) {
    return Math.max(column, row) <= 8 && Math.min(column, row) >= 1;
  }
}

export default Piece;
