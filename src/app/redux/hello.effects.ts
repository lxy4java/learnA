import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';

@Injectable()
export class HelloEffects {
    constructor(private actions$: Actions) { }
    
    @Effect() loginActions$ = this.actions$.ofType('LOGIN', 'LOGOUT')
        .map(payload => {
            console.log("LOGIN payloadis: ",payload);
            return { type: 'HELLO', name: 'hello' } 
        });
    
    /**** effect  中 return 的必须是  action WTF的设定， 然后会在 reducer 中寻找有没有同type 的action 
     * 有的话进入，如此循环直到没找到，直到最后找不到action执行default   */
    @Effect()  spanishActions$ = this.actions$.ofType('SPANISH')
        .map(action => {
           console.log("SPANISH payloadis: ",action);
          // return { type: 'SPANISH', name: 'hello' } 这么玩浏览器就会死循环，只有结束任务才能拯救
           return { type: 'LOGIN', name: 'hello' } // 会进入上面loginAction 中。
        }).do(data=>{
            console.log('并没有卵用的do');
            
        });

    @Effect() frenchctions$ = this.actions$.ofType('FRENCH')
        .map(payload => {
            console.log(payload);
            return 'hello' // 这样会报错。。
        });
        
}