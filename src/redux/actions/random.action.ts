import {SET_RANDOM_DIGITS, RandomActionTypes} from './types';

export const setRandomDigits = (
  payload: [number, number, number],
): RandomActionTypes => ({
  type: SET_RANDOM_DIGITS,
  payload,
});
