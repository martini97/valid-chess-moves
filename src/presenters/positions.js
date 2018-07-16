/**
 * Presents the response for the /positions/:piece/:startAt.
 * @param {Object} req - The request object.
 * @param {Object} req.params - The params object.
 * @param {String} req.params.piece - The type of the piece. eg: knight.
 * @param {Object} req.query - The query object.
 * @param {Number} [req.query.moves] - The number of moves to calculate.
 * @param {AlgebraicNotation[]} positions - All the positions that the piece can take in
 * the given moves.
 */
export default (req, positions) => ({
  positions,
  piece: req.params.piece,
  moves: Number.parseInt(req.query.moves, 10) || 2,
});
