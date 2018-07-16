export default theme => ({
  button: {
    margin: theme.spacing.unit,
    [theme.breakpoints.down('sm')]: {
      width: '90vmin',
    },
    width: '80vmin',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    position: 'relative',
  },
});
