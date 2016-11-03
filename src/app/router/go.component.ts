import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';


@Component({
    selector: 'go',
    template: '<h1>我要超越{{name}}</h1><button (click)="go()">点击</button>'
})
export class GoComponent implements OnInit {
    constructor(private router: Router, ) { }

    ngOnInit() { }
    name = 'cpp'
    go() {
        console.log('跳转到cpp');
        this.router.navigate(['cpp',{ key: "go" }]);
    }
}
/******方法中调用router 需要在构造器中引入，但不需要 Inject */