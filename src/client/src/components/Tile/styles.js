import { grey, blue, indigo } from '@material-ui/core/colors';

export default theme => ({
  tile: {
    position: 'relative',
    height: '100%',
    paddingRight: `${100/8}%`,
    cursor: 'pointer',
  },
  black: {
    backgroundColor: grey[900],
  },
  white: {
    backgroundColor: grey[400],
  },
  blackPossible: {
    backgroundColor: indigo[400],
  },
  whitePossible: {
    backgroundColor: blue[400],
  },
});
