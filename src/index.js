import app from './app';
import config from './config';

/* eslint no-console:0 */
app.listen(config.http.port, () => console.log(`Listening on ${config.http.port}`));
