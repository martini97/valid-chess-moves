import React from 'react';
import Proptypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

const Knight = ({ classes }) => (
  <span role="img" aria-label="horse" className={classes.knight}>
    🐴
  </span>
);

Knight.propTypes = {
  classes: Proptypes.object.isRequired,
};

export default withStyles(styles)(Knight);
