import React from 'react';
import Proptypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import Tile from '../../components/Tile';
import styles from './styles';

const columns = 'abcdefgh'.split('');
const rows = [...Array(8)].map((_, n) => 8 - n);

const Board = ({ classes, selected, allPossible, handleTileClick, tileDisabled }) => (
  <Grid container className={classes.board}>
    {
      rows.map(row => (
        <Grid container key={row}>
          {columns.map(column => (
            <Tile
              key={`${column}${row}`}
              row={row}
              column={column}
              selected={`${column}${row}` === selected}
              possible={!!~allPossible.indexOf(`${column}${row}`)}
              handleClick={handleTileClick.bind(null, `${column}${row}`)}
              disabled={tileDisabled}
            />
          ))}
        </Grid>
      ))
    }
  </Grid>
);

Board.propTypes = {
  classes: Proptypes.object.isRequired,
  handleTileClick: Proptypes.func.isRequired,
  allPossible: Proptypes.arrayOf(Proptypes.string),
  selected: Proptypes.string,
  tileDisabled: Proptypes.bool,
};

Board.defaultProps = {
  selected: '',
  allPossible: [],
  tileDisabled: false,
};

export default withStyles(styles)(Board);
