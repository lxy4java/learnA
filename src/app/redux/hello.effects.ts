import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';

@Injectable()
export class HelloEffects {
    constructor(private actions$: Actions) { }
    /**
    @Effect() helloActions$ = this.actions$.ofType('LOGIN', 'LOGOUT')
        .map(payload => {
            console.log("LOGIN payloadis: ",payload);
            return 'hello'
        });
    */
    /**** effect  中 return 的必须是  action WTF的设定，然后会在 effects 中寻找有没有同type 的action 
     * 有的话进入，如此循环直到没找到，那么就进入reducer ,根据type 找 case，没有就是default   */
    @Effect()  spanishActions$ = this.actions$.ofType('SPANISH')
        .map(action => {
            console.log("SPANISH payloadis: ",action);
           return { type: 'LOGIN', name: 'hello' }
        }).do(data=>{
            console.log('并没有卵用的do');
            
        });

    @Effect() frenchctions$ = this.actions$.ofType('FRENCH')
        .map(payload => {
            console.log(payload);
            return 'hello'
        });
}