import {combineReducers} from 'redux';
import randomReducer from './random.reducer';

export default combineReducers({
  random: randomReducer,
});
