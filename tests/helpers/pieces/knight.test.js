import Knight from '@/helpers/pieces/knight';
import allKinghtsPositions from '../../fixtures/knight-moves.json';
import allKinghtsPositionsIn2Moves from '../../fixtures/knight-moves-in-2-rounds.json';

function testPossiblePositions(startAt, validPositions) {
  describe(`Given a Knight starting at ${startAt}`, () => {
    it('should return all valid positions', () => {
      const knight = new Knight(startAt);
      const possiblePositions = knight.possiblePositionsInNMoves();
      expect(possiblePositions.length).toEqual(validPositions.length);
      possiblePositions.forEach((position) => {
        expect(validPositions).toContain(position);
      });
    });
  });
}

function testPossiblePositionsInNMoves(n, startAt, validPositions) {
  describe(`Given a Knight starting at ${startAt}`, () => {
    it(`should return all valid positions for it in ${n} moves`, () => {
      validPositions = Array.from(new Set(validPositions)); // eslint-disable-line
      const knight = new Knight(startAt);
      const possiblePositions = knight.possiblePositionsInNMoves({ n });
      expect(possiblePositions.length).toEqual(validPositions.length);
      possiblePositions.forEach((position) => {
        expect(validPositions).toContain(position);
      });
    });
  });
}

Object.entries(allKinghtsPositions)
  .forEach(entry => testPossiblePositions(...entry));
Object.entries(allKinghtsPositionsIn2Moves)
  .forEach(entry => testPossiblePositionsInNMoves(2, ...entry));
