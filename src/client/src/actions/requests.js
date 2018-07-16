import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const get = (entity, route, success, fail) => async (dispatch) => {
  const entityToLower = entity.toLowerCase();
  dispatch({
    type: `${entityToLower}/GET`,
  });

  try {
    const { data } = await axios({
      method: 'get',
      url: route,
    });
    dispatch({
      type: `${entityToLower}/GET_SUCCESS`,
      data,
    });
    if (success) success();
  } catch (err) {
    dispatch({
      type: `${entityToLower}/GET_FAIL`,
      data: err,
    });
    if (fail) fail();
  }
};
