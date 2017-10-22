import { Component, OnInit } from '@angular/core';

/***用cli 创建 component , 这里代码简单没用 模版  */
@Component({
    selector: 'hello',
    template: '<input type ="text" [(ngModel)]="title"><span>{{title}}</span>'
})
export class HelloComponent implements OnInit {
    
    title='hello';
    constructor() { }
    
    ngOnInit() { }
}