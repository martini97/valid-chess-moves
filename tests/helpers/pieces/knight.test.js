import Knight from '@/helpers/pieces/knight';

function testPossiblePositions(startAt, validPositions) {
  describe(`Given a Knight starting at ${startAt}`, () => {
    it('should return all valid positions', () => {
      const knight = new Knight(startAt);
      const possiblePositions = knight.possiblePositions();
      expect(possiblePositions.length).toEqual(validPositions.length);
      possiblePositions.forEach((position) => {
        expect(validPositions).toContain(position);
      });
    });
  });
}

const allKinghtsPositions = {
  a1: ['b3', 'c2'],
  a2: ['b4', 'c3', 'c1'],
  a3: ['b5', 'c4', 'c2', 'b1'],
  a4: ['b6', 'c5', 'c3', 'b2'],
  a5: ['b7', 'c6', 'c4', 'b3'],
  a6: ['b8', 'c7', 'c5', 'b4'],
  a7: ['c8', 'c6', 'b5'],
  a8: ['c7', 'b6'],
  b1: ['a3', 'c3', 'd2'],
  b2: ['a4', 'c4', 'd3', 'd1'],
  b3: ['a5', 'c5', 'd4', 'd2', 'c1', 'a1'],
  b4: ['a6', 'c6', 'd5', 'd3', 'c2', 'a2'],
  b5: ['a7', 'c7', 'd6', 'd4', 'c3', 'a3'],
  b6: ['a8', 'c8', 'd7', 'd5', 'c4', 'a4'],
  b7: ['d8', 'd6', 'c5', 'a5'],
  b8: ['d7', 'c6', 'a6'],
  c1: ['a2', 'b3', 'd3', 'e2'],
  c2: ['a3', 'b4', 'd4', 'e3', 'e1', 'a1'],
  c3: ['a4', 'b5', 'd5', 'e4', 'e2', 'a2', 'd1', 'b1'],
  c4: ['a5', 'b6', 'd6', 'e5', 'e3', 'a3', 'd2', 'b2'],
  c5: ['a6', 'b7', 'd7', 'e6', 'e4', 'a4', 'd3', 'b3'],
  c6: ['a7', 'b8', 'd8', 'e7', 'e5', 'a5', 'd4', 'b4'],
  c7: ['a8', 'e8', 'e6', 'a6', 'd5', 'b5'],
  c8: ['e7', 'a7', 'd6', 'b6'],
  d1: ['b2', 'c3', 'e3', 'f2'],
  d2: ['b3', 'c4', 'e4', 'f3', 'b1', 'f1'],
  d3: ['b4', 'c5', 'e5', 'f4', 'b2', 'f2', 'e1', 'c1'],
  d4: ['b5', 'c6', 'e6', 'f5', 'b3', 'f3', 'e2', 'c2'],
  d5: ['b6', 'c7', 'e7', 'f6', 'b4', 'f4', 'e3', 'c3'],
  d6: ['b7', 'c8', 'e8', 'f7', 'b5', 'f5', 'e4', 'c4'],
  d7: ['b8', 'f8', 'b6', 'f6', 'e5', 'c5'],
  d8: ['b7', 'f7', 'e6', 'c6'],
  e1: ['c2', 'd3', 'f3', 'g2'],
  e2: ['c3', 'd4', 'f4', 'g3', 'c1', 'g1'],
  e3: ['c4', 'd5', 'f5', 'g4', 'c2', 'g2', 'f1', 'd1'],
  e4: ['c5', 'd6', 'f6', 'g5', 'c3', 'g3', 'f2', 'd2'],
  e5: ['c6', 'd7', 'f7', 'g6', 'c4', 'g4', 'f3', 'd3'],
  e6: ['c7', 'd8', 'f8', 'g7', 'c5', 'g5', 'f4', 'd4'],
  e7: ['c8', 'g8', 'c6', 'g6', 'f5', 'd5'],
  e8: ['c7', 'g7', 'f6', 'd6'],
  f1: ['d2', 'e3', 'g3', 'h2'],
  f2: ['d3', 'e4', 'g4', 'h3', 'd1', 'h1'],
  f3: ['d4', 'e5', 'g5', 'h4', 'd2', 'h2', 'g1', 'e1'],
  f4: ['d5', 'e6', 'g6', 'h5', 'd3', 'h3', 'g2', 'e2'],
  f5: ['d6', 'e7', 'g7', 'h6', 'd4', 'h4', 'g3', 'e3'],
  f6: ['d7', 'e8', 'g8', 'h7', 'd5', 'h5', 'g4', 'e4'],
  f7: ['d8', 'h8', 'd6', 'h6', 'g5', 'e5'],
  f8: ['d7', 'h7', 'g6', 'e6'],
  g1: ['e2', 'f3', 'h3'],
  g2: ['e3', 'f4', 'h4', 'e1'],
  g3: ['e4', 'f5', 'h5', 'e2', 'h1', 'f1'],
  g4: ['e5', 'f6', 'h6', 'e3', 'h2', 'f2'],
  g5: ['e6', 'f7', 'h7', 'e4', 'h3', 'f3'],
  g6: ['e7', 'f8', 'h8', 'e5', 'h4', 'f4'],
  g7: ['e8', 'e6', 'h5', 'f5'],
  g8: ['e7', 'h6', 'f6'],
  h1: ['f2', 'g3'],
  h2: ['f3', 'g4', 'f1'],
  h3: ['f4', 'g5', 'f2', 'g1'],
  h4: ['f5', 'g6', 'f3', 'g2'],
  h5: ['f6', 'g7', 'f4', 'g3'],
  h6: ['f7', 'g8', 'f5', 'g4'],
  h7: ['f8', 'f6', 'g5'],
  h8: ['f7', 'g6'],
};

Object.entries(allKinghtsPositions).forEach(entry => testPossiblePositions(...entry));