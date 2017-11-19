import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

interface HelloState {
    message: string;
}


/***用cli 创建 component , 这里代码简单没用 模版  */
@Component({
    selector: 'hello',
    templateUrl: './hello.component.html',
    
})
export class HelloComponent implements OnInit {
    
    ngOnInit() {
    }
    
    message$: Observable<string>

    constructor(private store: Store<HelloState>) {
        //  here this message is what in StoreModule.forRoot({ message: simpleReducer })
        this.message$ = this.store.select('message')
    }
    spanishMessage() {
        this.store.dispatch({ type: 'SPANISH' })
    }
    frenchMessage() {
        this.store.dispatch({ type: 'FRENCH' })
    }
}