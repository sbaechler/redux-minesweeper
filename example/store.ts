import { configureStore } from 'redux-starter-kit';
import rootReducer from './reducer';
import * as React from 'react';
import { minesweeper } from '../src';

const initialState: any = {
  good: ['foo', 'bar'],
  bad: ['foo', 'bar', 'baz'],
};

const minesweeperInstance = minesweeper(React);

export const store = configureStore({
  reducer: rootReducer,
  middleware: [minesweeperInstance],
  preloadedState: initialState,
});

export const selectors = {
  good: (state) => state.good,
  bad: (state) => state.bad.slice(),
}
