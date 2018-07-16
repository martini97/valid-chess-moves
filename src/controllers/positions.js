import { BadRequestError } from 'meaning-error';
import * as pieces from '@/pieces';
import * as presenters from '@/presenters';
import * as validators from '@/validators';

/**
 * Controller for the /positions/:piece/:startAt.
 * @param {Object} req - The request object.
 * @param {Object} req.params - The params object.
 * @param {String} req.params.piece - The type of the piece. eg: knight.
 * @param {Object} req.query - The query object.
 * @param {Number} [req.query.moves] - The number of moves to calculate.
 * @param {Object} res - The response object.
 * @throws {BadRequestError} Throws a BadRequestError if the validation of params
 * or query fails.
 */
export default (req, res) => {
  const { params: { piece: pieceName, startAt }, query: { moves = 2 } } = req;
  const n = Number.parseInt(moves, 10);

  if (!validators.algebraicNotation(startAt)) {
    throw new BadRequestError(
      'Invalid algebraic position.',
      [{
        field: 'startAt',
        message: 'startAt is invalid',
      }],
    );
  }

  if (!validators.moves(n)) {
    throw new BadRequestError(
      'Invalid number of moves.',
      [{
        field: 'moves',
        message: 'moves is invalid',
      }],
    );
  }

  if (!(pieceName in pieces)) {
    throw new BadRequestError(
      `Invalid piece. Valid pieces: ${Object.keys(pieces)}.`,
      [{
        field: 'piece',
        message: 'piece is invalid',
      }],
    );
  }

  const piece = new pieces[pieceName](startAt);
  const positions = piece.possiblePositionsInNMoves({ n });
  res.status(200).send(presenters.positions(req, positions));
};
