import {createStore} from 'redux';
import rootReducer from './reducers';
import {RandomState} from './reducers/random.reducer';

export interface IRootState {
  random: RandomState;
}

export default createStore(rootReducer);
