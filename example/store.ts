import { configureStore } from 'redux-starter-kit';
import rootReducer from './reducer';
import { minesweeper } from '../src';

const initialState: any = {
  good: ['foo', 'bar'],
  bad: ['foo', 'bar', 'baz'],
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: [minesweeper],
  preloadedState: initialState,
});

export const selectors = {
  good: (state) => state.good,
  bad: (state) => state.bad.slice(),
}
