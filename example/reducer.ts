import { Action } from 'redux';

export default function rootReducer(state = {}, action: Action) {
  return {
    ...state,
  };
}
