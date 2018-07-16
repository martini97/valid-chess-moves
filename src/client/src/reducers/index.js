import { combineReducers } from 'redux';

import tile from './tile';
import positions from './positions';

export default combineReducers({
  tile,
  positions,
});
