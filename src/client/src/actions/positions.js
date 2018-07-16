import * as requestsActions from './requests';
import { RESOURCE, POSITIONS_CLEAR } from '../reducers/positions';

export const get = (piece = 'knight') => async (dispatch, getState) => {
  const position = getState().tile.selected;
  dispatch(requestsActions.get(RESOURCE, `/positions/${piece}/${position}`));
};

export const clear = () => (dispatch) => {
  dispatch({
    type: POSITIONS_CLEAR,
  });
}
