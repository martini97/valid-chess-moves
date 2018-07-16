import React from 'react';
import Proptypes from 'prop-types';
import classnames from 'classnames';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import Knight from '../Knight';
import styles from './styles';

function tileColor(column, row, possible) {
  const color = (column.charCodeAt(0) - 96 + row) % 2 ? 'black' : 'white';
  return possible ? `${color}Possible` : color
}

const Tile = ({ classes, row, column, selected, possible, disabled, handleClick }) => {
  const tileClass = classnames(classes.tile, classes[tileColor(column, row, possible)]);
  return (
    <Grid item className={tileClass} onClick={disabled ? () => null : handleClick}>
      { selected && (<Knight />) }
    </Grid>
  )
};

Tile.propTypes = {
  classes: Proptypes.object.isRequired,
  row: Proptypes.number.isRequired,
  column: Proptypes.string.isRequired,
  handleClick: Proptypes.func.isRequired,
  selected: Proptypes.bool,
  possible: Proptypes.bool,
  disabled: Proptypes.bool,
};

Tile.defaultProps = {
  selected: false,
  possible: false,
  disabled: false,
};

export default withStyles(styles)(Tile);
