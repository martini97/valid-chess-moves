import { BadRequestError } from 'meaning-error';

/** Class representing a generic chess piece. */
class Piece {
  /**
   * Create a Piece.
   * @param {AlgebraicNotation} algebraicPosition - The position of the piece in algebraic notation.
   */
  constructor(algebraicPosition) {
    /**
    The algebraic position of the piece.
    @type AlgebraicNotation
    */
    this.algebraicPosition = Piece.validateAlgebraicNotation(algebraicPosition);

    /**
    The coordinates of the piece.
    @type Coordinates
    */
    this.coordinates = Piece.fromAlgebraic(algebraicPosition);
  }

  /**
   * This field defines the overall rules for the movement of a piece,
   * override it on the specific piece class with the piece rule.
   * @summary The rules for the piece movement.
   * @type {Coordinates[]}
   */
  rules = [];

  /**
   * Validates if a position is in algebraic notation.
   * @param {AlgebraicNotation} algebraicPosition - The position of the piece in algebraic notation.
   * @throws {BadRequestError} Throws a BadRequestError if the given algebraicPosition
   * is invalid.
   * @returns {AlgebraicNotation} - The validated algebraic notation.
   */
  static validateAlgebraicNotation(algebraicPosition) {
    if (typeof algebraicPosition !== 'string'
          || !algebraicPosition.toLowerCase().match(/^[a-h][1-8]$/)) {
      throw new BadRequestError(
        'Invalid algebraic position',
        [{ field: 'algebraic', message: 'Param `algebraic` is invalid.' }],
      );
    }

    return algebraicPosition.toLowerCase();
  }

  /**
   * Converts from algebric notation to coordinates.
   * @param {AlgebraicNotation} algebraicPosition - The position of the piece in algebraic notation.
   * @returns {Coordinates} An array in the form [column, row]
   */
  static fromAlgebraic(algebraicPosition) {
    const [column, row] = algebraicPosition.toLowerCase().split('');
    return [column.charCodeAt(0) - 96, parseInt(row, 10)];
  }

  /**
   * Converts from coordinates to algebric notation.
   * @param {Coordinates} coordinates -  The coordinates of the piece.
   * @returns {AlgebraicNotation} - The position of the piece in algebraic notation.
   */
  static toAlgebraic(coordinates) {
    return `${String.fromCharCode(96 + coordinates[0])}${parseInt(coordinates[1], 10)}`;
  }

  /**
   * Checks if a given position is valid or not.
   * @param {Coordinates} coordinates - The coordinates of the piece.
   * @returns {boolean} - Whether or not the given position is legal.
   */
  static isLegalPosition(coordinates) {
    return coordinates.length > 0
      && Math.max(...coordinates) <= 8
      && Math.min(...coordinates) >= 1;
  }

  /**
   * All the possible (legal) movements of a piece.
   * @private
   * @param {Coordinates} startAt - Starting position of piece.
   * @returns {Coordinates[]} - Every possible coordinates that the piece can reach,
   * it includes coordinates out of the board.
   */
  possiblePositions(startAt) { // eslint-disable-line
    return this.rules
      .map(rule => [startAt[0] + rule[0], startAt[1] + rule[1]])
      .filter(position => this.constructor.isLegalPosition(position));
  }

  /**
   * All the possible (legal) movements of a piece.
   * @returns {Coordinate[]} Every possible legal coordinate that the piece can reach.
   */
  possiblePositions() {
    return this.rules()
      .filter(position => Piece.isLegalPosition(position))
      .map(position => Piece.toAlgebraic(position));
  }
}

export default Piece;
