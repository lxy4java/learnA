import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Actions } from '@ngrx/effects/src/actions';

interface HelloState {
    message: string;
}

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
        //this.store.dispatch({ type: 'SPANISH' })
        //this.store.dispatch({type:'LOGIN',payload:{type:'aac',name:'hello'}});
        this.store.dispatch({ type: 'SPANISH', payload: { type: 'SPANISH', name: 'hello' } });
    }
    frenchMessage() {
        //this.store.dispatch({ type: 'FRENCH' })
        this.store.dispatch({ type: 'FRENCH', payload: { type: 'FRENCH', name: 'hello' } });

    }
    loginMessage() {
        //this.store.dispatch({ type: 'FRENCH' })
        this.store.dispatch({ type: 'LOGIN', payload: { type: 'LOGIN', name: 'hello' } });

    }
}