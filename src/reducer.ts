import { Action } from 'redux';

export function minesweeperReducer(state = {}, action: Action): {} {
    return action.type === '@minesweeper:ping' ? ({}): state
}
