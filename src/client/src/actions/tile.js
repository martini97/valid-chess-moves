import { TILE_SELECT } from '../reducers/tile';

export const select = (tile) => async (dispatch) => {
  dispatch({
    type: TILE_SELECT,
    data: { tile },
  });
}
