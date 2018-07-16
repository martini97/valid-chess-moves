import Piece from './piece';

/**
 * Class representing a Knight piece.
 * @param {AlgebraicNotation} algebraicPosition - The algebraic position of the Knight.
 * @extends {Piece}
 */
class Knight extends Piece {
  /**
   * @override
   */
  rules = [
    [+2, +1],
    [+2, -1],
    [-2, -1],
    [-2, +1],
    [+1, +2],
    [+1, -2],
    [-1, -2],
    [-1, +2],
  ];
}

export default Knight;
