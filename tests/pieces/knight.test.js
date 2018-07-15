import Knight from '@/pieces/knight';
import allKinghtsPositions from '../fixtures/pieces/knight/1-moves.json';
import allKinghtsPositionsIn2Moves from '../fixtures/pieces/knight/2-moves.json';

/**
 * @test {Knight}
 */
describe('Given a Knight', () => {
  function testPossiblePositions(startAt, validPositions) {
    /**
     * @test {Knight#possiblePositionsInNMoves}
     */
    it('should return all valid positions', () => {
      const knight = new Knight(startAt);
      const possiblePositions = knight.possiblePositionsInNMoves();
      expect(possiblePositions.length).toEqual(validPositions.length);
      possiblePositions.forEach((position) => {
        expect(validPositions).toContain(position);
      });
    });
  }

  function testPossiblePositionsIn2Moves(startAt, validPositions) {
    /**
     * @test {Knight#possiblePositionsInNMoves}
     */
    it('should return all valid positions for it in 2 moves', () => {
      validPositions = Array.from(new Set(validPositions)); // eslint-disable-line
      const knight = new Knight(startAt);
      const possiblePositions = knight.possiblePositionsInNMoves({ n: 2 });
      expect(possiblePositions.length).toEqual(validPositions.length);
      possiblePositions.forEach((position) => {
        expect(validPositions).toContain(position);
      });
    });
  }

  Object.entries(allKinghtsPositions)
    .forEach(entry => testPossiblePositions(...entry));
  Object.entries(allKinghtsPositionsIn2Moves)
    .forEach(entry => testPossiblePositionsIn2Moves(...entry));
});
