import express from 'express';
import path from 'path';
import meaningError from 'meaning-error-middleware';

import * as routes from '@/routes';
import * as middlewares from '@/middlewares';

const app = express();

app.use('/positions', routes.positions);

app.use(meaningError);
app.use(middlewares.errors);

app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

export default app;
