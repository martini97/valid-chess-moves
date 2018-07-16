import Piece from '@/pieces/piece';
import allPositions from '../fixtures/pieces/all-positions.json';

/**
 * @test {Piece}
 */
describe('Given a Piece', () => {
  /**
   * @test {Piece#rules}
   */
  it('should have no rules', () => {
    const piece = new Piece('A1');
    expect(piece.rules.length).toEqual(0);
  });

  /**
   * @test {Piece#possiblePositions}
   */
  it('should not be able to move', () => {
    const piece = new Piece('A1');
    expect(piece.possiblePositions().length).toEqual(0);
  });

  /**
   * @test {Piece#possiblePositionsInNMoves}
   */
  it('next N moves should always return [] for N > 0', () => {
    const piece = new Piece('A1');
    [...Array(19)].map((_, n) => expect(piece.possiblePositionsInNMoves({ n: n + 1 }).length)
      .toEqual(0));
  });

  describe('next N moves should throw an error for invalid N', () => {
    function shouldThrowAnError(piece, n) {
      /**
       * @test {Piece#possiblePositionsInNMoves}
       */
      it(`N = ${n}`, () => {
        expect(() => piece.possiblePositionsInNMoves({ n }))
          .toThrowError(TypeError);
      });
    }

    const piece = new Piece('A1');
    shouldThrowAnError(piece, -1);
    shouldThrowAnError(piece, 2.5);
    shouldThrowAnError(piece, 21);
    shouldThrowAnError(piece, Math.PI);
    shouldThrowAnError(piece, -Math.PI);
    shouldThrowAnError(piece, Infinity);
    shouldThrowAnError(piece, -Infinity);
  });
  describe('initiated with an invalid algebraic position', () => {
    function shouldThrowAnError(algebraic) {
      /**
       * @test {Piece.validateAlgebraicNotation}
       */
      it(`should throw an error [${algebraic}]`, () => {
        expect(() => new Piece(algebraic)).toThrowError(TypeError);
      });
    }

    shouldThrowAnError('8h');
    shouldThrowAnError([1, 1]);
    shouldThrowAnError('invalid algebraic position');
    shouldThrowAnError('i1');
    shouldThrowAnError('h9');
    shouldThrowAnError(8);
    shouldThrowAnError({ column: 'A', row: 8 });
  });

  describe('initiated with a valid algebraic position', () => {
    function shouldSetCorrectCoordinates(algebraic, expected) {
      /**
       * @test {Piece#coordinates}
       * @test {Piece#algebraicPosition}
       */
      it(`should set correct coordinates [${algebraic} => ${expected}]`, () => {
        const piece = new Piece(algebraic);
        expect(piece.coordinates).toEqual(expected);
        expect(piece.algebraicPosition).toEqual(algebraic.toLowerCase());
      });
    }

    function shouldGetCorrectAlgebraic(expected, coordinates) {
      /**
       * @test {Piece.toAlgebraic}
       */
      it(`should get correct algebraic [${coordinates} => ${expected}]`, () => {
        expect(Piece.toAlgebraic(coordinates))
          .toEqual(expected.toLowerCase());
      });
    }

    allPositions.forEach(testData => shouldSetCorrectCoordinates(...testData));
    allPositions.forEach(testData => shouldGetCorrectAlgebraic(...testData));
  });

  describe('testing for legal positions', () => {
    function shouldValidateLegalPosition(pos, expected) {
      /**
       * @test {Piece.isLegalPosition}
       */
      it(`should consider ${pos} ${expected ? 'legal' : 'ilegal'}`, () => {
        expect(Piece.isLegalPosition(pos)).toEqual(expected);
      });
    }
    const legalMoves = [];
    for (let i = 1; i <= 8; i++) {
      for (let j = 1; j <= 8; j++) {
        legalMoves.push([i, j]);
      }
    }

    legalMoves.forEach(pos => shouldValidateLegalPosition(pos, true));
    shouldValidateLegalPosition([-1, 2], false);
    shouldValidateLegalPosition([1, -2], false);
    shouldValidateLegalPosition([10, 2], false);
    shouldValidateLegalPosition([1, 20], false);
    shouldValidateLegalPosition([-1, 20], false);
    shouldValidateLegalPosition([-10, -2], false);
    shouldValidateLegalPosition('wrong parameter', false);
    shouldValidateLegalPosition({}, false);
    shouldValidateLegalPosition(2, false);
  });
});
