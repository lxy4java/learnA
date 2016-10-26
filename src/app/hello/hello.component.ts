import { Component, OnInit } from '@angular/core';

/***用cli 创建 component , 这里代码简单没用 模版  */
@Component({
    selector: 'hello',
    template: '<h1>hello world</h1>'
})
export class HelloComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}