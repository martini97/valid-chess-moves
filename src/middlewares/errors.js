/**
 * Catches all erros not catched by error-meaning, logs them and return a 500 status.
 * @summary Error logging middleware.
 * @param {Object} err - The error.
 * @param {Object} req - The req.
 * @param {Object} res - The res.
 */
export default (err, req, res) => {
  console.error(`${new Date().toISOString()} `, err.stack || err); // eslint-disable-line no-console
  if (err) res.status(500).send();
};
