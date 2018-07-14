import app from './app';
import config from './config';

app.listen(config.http.port, config.http.host, () => {
  /* eslint no-console:0 */
  console.info('Server started at [ http://%s:%s ]', config.http.host, config.http.port);
});