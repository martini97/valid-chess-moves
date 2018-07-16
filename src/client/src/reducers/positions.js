export const RESOURCE = 'positions'
export const POSITIONS_GET = `${RESOURCE}/GET`;
export const POSITIONS_SUCCESS = `${RESOURCE}/GET_SUCCESS`;
export const POSITIONS_FAIL = `${RESOURCE}/GET_FAIL`;
export const POSITIONS_CLEAR = `${RESOURCE}/CLEAR`;

const initialState = {
  positions: [],
  isLoading: false,
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case POSITIONS_GET:
      return {
        ...initialState,
        isLoading: true,
      };

    case POSITIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        ...action.data,
      };

    case POSITIONS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.data,
      };

    case POSITIONS_CLEAR:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};
