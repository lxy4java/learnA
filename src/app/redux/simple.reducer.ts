import { Action } from '@ngrx/store';



export class HelloAction implements Action {
    readonly type = 'FRENCH';
    constructor(public payload: string) { }
}
/****
 *  请求总是先进入reducer，然后寻找action.type ，进入对应的case。之后居然又去寻找了effects,
 *  如果有同名effects，舍弃case的返回结果，用effects的，然而effect最后总是会走到default中去的。
 */
export function simpleReducer(state: any = {}, action: Action) {
    console.log('reducer: '+action.type);
    switch (action.type) {
        case 'LOGIN':
            console.log('LOGIN case');
            return '登陆';
        default:
            console.log('here defaul case');
            return action.type;
    }
}