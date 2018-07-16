/**
 * Moves validator.
 * @param {Number} moves
 * @returns {Boolean} Whether or not the number of moves is valid.
 */
export default moves => Number.isInteger(moves) && moves > 0 && moves < 20;
