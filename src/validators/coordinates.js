/**
 * Coordinates validator.
 * @param {Coordinates} coordinates
 * @returns {Boolean} Whether or not the position is valid.
 */
export default coordinates => coordinates.length === 2
  && Math.max(...coordinates) <= 8
  && Math.min(...coordinates) >= 1;
