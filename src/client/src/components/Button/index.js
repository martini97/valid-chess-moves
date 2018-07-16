import React from 'react';
import Proptypes from 'prop-types';
import { Button as MUIButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

const Button = ({ classes, disabled, handleClick, color, children }) => (
  <div className={classes.container}>
    <MUIButton
      variant="contained"
      color={color}
      className={classes.button}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </MUIButton>
  </div>
);

Button.propTypes = {
  classes: Proptypes.object.isRequired,
  children: Proptypes.node.isRequired,
  handleClick: Proptypes.func.isRequired,
  disabled: Proptypes.bool,
  color: Proptypes.string,
};

Button.defaultProps = {
  color: 'primary',
  disabled: false,
};

export default withStyles(styles)(Button);
