import { Middleware } from 'redux';
import throttle from 'lodash.throttle';
import updateHook from './hook';


let pinged = false;
let ping: (dispatch: any) => void;

updateHook.then((stop) => {
  ping = throttle((dispatch) => {
    pinged = true;
    const action = {
      type: '@minesweeper:ping',
    }

    dispatch(action);
    setTimeout(() => {
      stop();
    });

  }, 1000, { trailing: true });
});




export const minesweeper: Middleware = _ => next => action => {
  if(ping && !pinged) {
    ping(next);
  }

  return next(action)
};
