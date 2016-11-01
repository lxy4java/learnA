import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'java',
    template: '<h1>java 是世界上最好的语言  <router-outlet></router-outlet> </h1>'
})
export class JavaComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
/****
 * java router 下面的子路由要在 java template 中配置 <router-outlet> 
 * 而并不能用 app中的router-outlet
 * 
 * 
 */