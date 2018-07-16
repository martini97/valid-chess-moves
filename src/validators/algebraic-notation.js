/**
 * Algebraic notation validator.
 * @param {AlgebraicNotation} algebraicPosition
 * @returns {Boolean} Whether or not the position is valid.
 */
export default (algebraicPosition) => {
  if (typeof algebraicPosition !== 'string'
    || !algebraicPosition.toLowerCase().match(/^[a-h][1-8]$/)) {
    return false;
  }
  return true;
};
