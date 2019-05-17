# Redux Minesweeper

Finds unintentional prop changes that trigger a component rerender.

## Installation

    yarn add --dev redux-minesweeper

The package contains type information.

## Usage

The module uses the React DevTools hook to listen for state updates. Therefore it only
works if the DevTools are installed and connected to the current page.

The tool is a middleware that once the app has initialized and settled, sends out a Redux
event and listens for component rerenders.

The library must be imported before React is imported

You can just import the module somewhere if the middleware import is after the React import.

Add the middleware and the provided reducer like so. This example is using
redux-starter-kit.

    import { minesweeper, minesweeperReducer } from 'redux-minesweeper';

    export const store = configureStore({
      reducer: combineReducers({
        ms: minesweeperReducer,
        other: otherReducer,
      }),
      middleware: [minesweeper],
      preloadedState: initialState,
    });

The important parts are the `minesweeperReducer` and the `minesweeper` middleware.

Open the React Tab in the Dev Tools and reload the page.
