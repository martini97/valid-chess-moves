import Piece from '@/helpers/pieces/piece';

describe('When initiating with an invalid algebraic position', () => {
  function shouldThrowAnError(algebraic) {
    it(`should throw an error [${algebraic}]`, () => {
      expect(() => new Piece(algebraic)).toThrowError('Invalid algebraic position');
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

describe('When initiating with a valid algebraic position', () => {
  function shouldSetCorrectCoordinates(algebraic, expected) {
    it(`should set correct coordinates [${algebraic} => ${expected}]`, () => {
      const piece = new Piece(algebraic);
      expect(piece.coordinates).toEqual(expected);
      expect(piece.algebraicPosition).toEqual(algebraic.toLowerCase());
    });
  }

  function shouldGetCorrectAlgebraic(expected, coordinates) {
    it(`should get correct algebraic [${coordinates} => ${expected}]`, () => {
      expect(Piece.toAlgebraic(coordinates))
        .toEqual(expected.toLowerCase());
    });
  }

  const allPositions = [
    ['a1', [1, 1]], ['a2', [1, 2]], ['a3', [1, 3]], ['a4', [1, 4]],
    ['a5', [1, 5]], ['a6', [1, 6]], ['a7', [1, 7]], ['a8', [1, 8]],
    ['b1', [2, 1]], ['b2', [2, 2]], ['b3', [2, 3]], ['b4', [2, 4]],
    ['b5', [2, 5]], ['b6', [2, 6]], ['b7', [2, 7]], ['b8', [2, 8]],
    ['c1', [3, 1]], ['c2', [3, 2]], ['c3', [3, 3]], ['c4', [3, 4]],
    ['c5', [3, 5]], ['c6', [3, 6]], ['c7', [3, 7]], ['c8', [3, 8]],
    ['d1', [4, 1]], ['d2', [4, 2]], ['d3', [4, 3]], ['d4', [4, 4]],
    ['d5', [4, 5]], ['d6', [4, 6]], ['d7', [4, 7]], ['d8', [4, 8]],
    ['e1', [5, 1]], ['e2', [5, 2]], ['e3', [5, 3]], ['e4', [5, 4]],
    ['e5', [5, 5]], ['e6', [5, 6]], ['e7', [5, 7]], ['e8', [5, 8]],
    ['f1', [6, 1]], ['f2', [6, 2]], ['f3', [6, 3]], ['f4', [6, 4]],
    ['f5', [6, 5]], ['f6', [6, 6]], ['f7', [6, 7]], ['f8', [6, 8]],
    ['g1', [7, 1]], ['g2', [7, 2]], ['g3', [7, 3]], ['g4', [7, 4]],
    ['g5', [7, 5]], ['g6', [7, 6]], ['g7', [7, 7]], ['g8', [7, 8]],
    ['h1', [8, 1]], ['h2', [8, 2]], ['h3', [8, 3]], ['h4', [8, 4]],
    ['h5', [8, 5]], ['h6', [8, 6]], ['h7', [8, 7]], ['h8', [8, 8]],
    ['A1', [1, 1]], ['A2', [1, 2]], ['A3', [1, 3]], ['A4', [1, 4]],
    ['A5', [1, 5]], ['A6', [1, 6]], ['A7', [1, 7]], ['A8', [1, 8]],
    ['B1', [2, 1]], ['B2', [2, 2]], ['B3', [2, 3]], ['B4', [2, 4]],
    ['B5', [2, 5]], ['B6', [2, 6]], ['B7', [2, 7]], ['B8', [2, 8]],
    ['C1', [3, 1]], ['C2', [3, 2]], ['C3', [3, 3]], ['C4', [3, 4]],
    ['C5', [3, 5]], ['C6', [3, 6]], ['C7', [3, 7]], ['C8', [3, 8]],
    ['D1', [4, 1]], ['D2', [4, 2]], ['D3', [4, 3]], ['D4', [4, 4]],
    ['D5', [4, 5]], ['D6', [4, 6]], ['D7', [4, 7]], ['D8', [4, 8]],
    ['E1', [5, 1]], ['E2', [5, 2]], ['E3', [5, 3]], ['E4', [5, 4]],
    ['E5', [5, 5]], ['E6', [5, 6]], ['E7', [5, 7]], ['E8', [5, 8]],
    ['F1', [6, 1]], ['F2', [6, 2]], ['F3', [6, 3]], ['F4', [6, 4]],
    ['F5', [6, 5]], ['F6', [6, 6]], ['F7', [6, 7]], ['F8', [6, 8]],
    ['G1', [7, 1]], ['G2', [7, 2]], ['G3', [7, 3]], ['G4', [7, 4]],
    ['G5', [7, 5]], ['G6', [7, 6]], ['G7', [7, 7]], ['G8', [7, 8]],
    ['H1', [8, 1]], ['H2', [8, 2]], ['H3', [8, 3]], ['H4', [8, 4]],
    ['H5', [8, 5]], ['H6', [8, 6]], ['H7', [8, 7]], ['H8', [8, 8]],
  ];

  allPositions.forEach(testData => shouldSetCorrectCoordinates(...testData));
  allPositions.forEach(testData => shouldGetCorrectAlgebraic(...testData));
});

describe('when testing for legal positions', () => {
  function shouldValidateLegalPosition(pos, expected) {
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

describe('Given a generic piece', () => {
  it('should have no rules', () => {
    const piece = new Piece('A1');
    expect(piece.rules.length).toEqual(0);
  });

  it('should not be able to move', () => {
    const piece = new Piece('A1');
    expect(piece.possiblePositions().length).toEqual(0);
  });

  it('next N moves should always return [] for N > 0', () => {
    const piece = new Piece('A1');
    [...Array(10)].map((_, n) => expect(piece.possiblePositionsInNMoves({ n }).length)
      .toEqual(0));
  });

  describe('next N moves should throw an error for invalid N', () => {
    function shouldThrowAnError(piece, n) {
      it(`N = ${n}`, () => {
        expect(() => piece.possiblePositionsInNMoves({ n }))
          .toThrowError('Invalid argument, moves should be an integer 0 < moves < 20');
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
});
