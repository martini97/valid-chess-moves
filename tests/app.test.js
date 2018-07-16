import request from 'supertest';
import app from '@/app';

/**
 * @test {app}
 */
describe('Given the app', () => {
  describe('When getting a not implemented piece', () => {
    it('should return an error', async () => {
      const { body } = await request(app)
        .get('/positions/king/a1')
        .expect(400);
      expect(body).toHaveProperty('error_name', 'BadRequestError');
      expect(body).toHaveProperty('error_message', 'Invalid piece. Valid pieces: knight.');
      expect(body).toHaveProperty('status_code', 400);
      expect(body).toHaveProperty('error');
      expect(body.error).toHaveLength(1);
      expect(body.error[0]).toHaveProperty('field', 'piece');
      expect(body.error[0]).toHaveProperty('message', 'piece is invalid');
    });
  });

  describe('When getting a implemented piece', () => {
    it('should return possible positions', async () => {
      const { body } = await request(app)
        .get('/positions/knight/a1')
        .expect(200);
      expect(body).toHaveProperty('piece', 'knight');
      expect(body).toHaveProperty('moves', 2);
      expect(body).toHaveProperty('positions', [
        'e3', 'e1', 'a1', 'a3', 'd4', 'b4', 'd2', 'c5', 'c1', 'a5',
      ]);
    });

    it('should allow query for n of moves', async () => {
      const { body } = await request(app)
        .get('/positions/knight/a1?moves=5')
        .expect(200);
      expect(body).toHaveProperty('piece', 'knight');
      expect(body).toHaveProperty('moves', 5);
      expect(body).toHaveProperty('positions', [
        'g4', 'g2', 'c2', 'c4', 'f5', 'f1', 'd1', 'd5',
        'g6', 'c6', 'f7', 'f3', 'd3', 'd7', 'g8', 'h3',
        'h1', 'e4', 'h7', 'h5', 'e8', 'e2', 'e6', 'b3',
        'b5', 'b1', 'a2', 'a6', 'b7', 'c8', 'a4', 'a8',
      ]);
    });

    it('should throw an error for invalid position', async () => {
      const { body } = await request(app)
        .get('/positions/knight/1a')
        .expect(400);
      expect(body).toHaveProperty('error_name', 'BadRequestError');
      expect(body).toHaveProperty('error_message', 'Invalid algebraic position.');
      expect(body).toHaveProperty('status_code', 400);
      expect(body).toHaveProperty('error');
      expect(body.error).toHaveLength(1);
      expect(body.error[0]).toHaveProperty('field', 'startAt');
      expect(body.error[0]).toHaveProperty('message', 'startAt is invalid');
    });

    it('should throw an error for negative moves', async () => {
      const { body } = await request(app)
        .get('/positions/knight/a1?moves=-1')
        .expect(400);
      expect(body).toHaveProperty('error_name', 'BadRequestError');
      expect(body).toHaveProperty('error_message', 'Invalid number of moves.');
      expect(body).toHaveProperty('status_code', 400);
      expect(body).toHaveProperty('error');
      expect(body.error).toHaveLength(1);
      expect(body.error[0]).toHaveProperty('field', 'moves');
      expect(body.error[0]).toHaveProperty('message', 'moves is invalid');
    });

    it('should throw an error for big moves', async () => {
      const { body } = await request(app)
        .get('/positions/knight/a1?moves=21')
        .expect(400);
      expect(body).toHaveProperty('error_name', 'BadRequestError');
      expect(body).toHaveProperty('error_message', 'Invalid number of moves.');
      expect(body).toHaveProperty('status_code', 400);
      expect(body).toHaveProperty('error');
      expect(body.error).toHaveLength(1);
      expect(body.error[0]).toHaveProperty('field', 'moves');
      expect(body.error[0]).toHaveProperty('message', 'moves is invalid');
    });
  });
});
