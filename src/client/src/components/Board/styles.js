export default theme => ({
  board: {
    [theme.breakpoints.down('sm')]: {
      width: '90vmin',
      height: '90vmin',
    },
    border: '3vmin solid gray',
    textAlign: 'center',
    width: '80vmin',
    height: '80vmin',
    margin: 'auto',
  },
});
