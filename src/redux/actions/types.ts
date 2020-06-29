export const SET_RANDOM_DIGITS = 'SET_RANDOM_DIGITS';

interface SetRandomDigitsAction {
  type: typeof SET_RANDOM_DIGITS;
  payload: Array<Number>;
}

export type RandomActionTypes = SetRandomDigitsAction;
