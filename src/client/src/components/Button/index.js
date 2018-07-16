import React from 'react';
import Proptypes from 'prop-types';
import {
  Button as MUIButton,
  CircularProgress,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

const Button = ({ classes, disabled, handleClick, color, children, isLoading }) => (
  <div className={classes.container}>
    <MUIButton
      variant="contained"
      color={color}
      className={classes.button}
      disabled={disabled}
      onClick={handleClick}
    >
      {
        isLoading
        ? <CircularProgress size={20} />
        : children
      }
    </MUIButton>
  </div>
);

Button.propTypes = {
  classes: Proptypes.object.isRequired,
  children: Proptypes.node.isRequired,
  handleClick: Proptypes.func.isRequired,
  disabled: Proptypes.bool,
  color: Proptypes.string,
  isLoading: Proptypes.bool,
};

Button.defaultProps = {
  color: 'primary',
  disabled: false,
  isLoading: false,
};

export default withStyles(styles)(Button);
