import { Injectable } from '@angular/core';
import { USR } from './usr.data';

@Injectable()
export class UsrService {

    constructor() { }
    /**Promise 是异步获取 */
    getUsr(){
        return Promise.resolve(USR);
    }
    /***可以设置超时时间 只是这写法有点二 */
    getUsr10s(){
        //return Promise.resolve(resolve => setTimeout(resolve(USR), 1000)).then(() =>this.getUsr());
        return  Promise.resolve(resolve=> setTimeout(resolve(USR), 1000)).then(()=>Promise.resolve(USR));
    }
}