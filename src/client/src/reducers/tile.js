export const TILE_SELECT = 'tile/SELECT';

const initialState = {
  selected: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TILE_SELECT:
      return {
        ...initialState,
        selected: action.data.tile,
      };
    default:
      return state;
  }
};
