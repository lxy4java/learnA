import { Action } from '@ngrx/store';



export class HelloAction implements Action {
    readonly type = 'FRENCH';
    constructor(public payload: string) { }
}

export function simpleReducer(state: any = {}, action: Action) {
    console.log(action.type);
    switch (action.type) {
        case 'LOGIN':
            console.log('LOGIN');
            return 'LOGIN';
        default:
            console.log('here');
            return action.type;
    }
}