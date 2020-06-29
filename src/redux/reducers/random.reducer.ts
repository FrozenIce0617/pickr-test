import {SET_RANDOM_DIGITS, RandomActionTypes} from '../actions/types';
import {randomDigitGenerator} from '../../utils';

export interface RandomState {
  logs: Array<Array<Number>>;
}

const initialState: RandomState = {
  logs: [
    [randomDigitGenerator(), randomDigitGenerator(), randomDigitGenerator()],
  ],
};

const reducer = (state = initialState, action: RandomActionTypes) => {
  switch (action.type) {
    case SET_RANDOM_DIGITS:
      return {
        logs: state.logs.concat([action.payload]),
      };
    default:
      return state;
  }
};

export default reducer;
