import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Board from '../../components/Board';
import Button from '../../components/Button';
import * as tileActions from '../../actions/tile';
import * as positionsActions from '../../actions/positions';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Board
          tileDisabled={this.props.positions.isLoading}
          selected={this.props.tile.selected}
          handleTileClick={this.props.actions.tile.select}
          allPossible={this.props.positions.positions}
        />
        <Button
          disabled={this.props.positions.isLoading || !this.props.tile.selected}
          handleClick={this.props.actions.positions.get}
        >
          Calculate
        </Button>
        <Button
          disabled={this.props.positions.isLoading
                    || !this.props.tile.selected
                    || !this.props.positions.positions.length}
          handleClick={this.props.actions.positions.clear}
          color="default"
        >
          Clear
        </Button>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  tile: state.tile,
  positions: state.positions,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    tile: {
      select: (tile) => { dispatch(tileActions.select(tile)); },
    },
    positions: {
      get: () => { dispatch(positionsActions.get()); },
      clear: () => { dispatch(positionsActions.clear()); },
    },
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
