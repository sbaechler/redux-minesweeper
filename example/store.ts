import { configureStore, combineReducers } from 'redux-starter-kit';
import { minesweeper, minesweeperReducer } from '../src';
import reducer from './reducer';

const initialState: any = {
  ms: {},
  example: {
    good: ['foo', 'bar'],
    bad: ['foo', 'bar', 'baz'],
  },
};

export const store = configureStore({
  reducer: combineReducers({
    ms: minesweeperReducer,
    example: reducer,
  }),
  middleware: [minesweeper],
  preloadedState: initialState,
});

export const selectors = {
  good: (state) => state.example.good,
  bad: (state) => state.example.bad.slice(),
};
