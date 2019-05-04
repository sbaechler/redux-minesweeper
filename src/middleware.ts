import { Middleware } from 'redux';
import throttle from 'lodash.throttle';
import './hook';

export function minesweeper(React: any): Middleware {

  let pinged = false;

  const ping = throttle((dispatch) => {


    const action = {
      type: '@minesweeper:ping',
    }

    dispatch(action);
    pinged = true;
  }, 1000);


  const middleware: Middleware = store => next => action => {
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()

    if(!pinged) {
      ping(next);
    }

    return result
  };

  return middleware;
}
