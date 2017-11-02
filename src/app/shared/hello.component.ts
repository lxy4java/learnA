import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-hello',
    templateUrl: './hello.component.html',
    styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

    name: string;
    title = 'app works!';


    @Input() set hello(hello: string) {
        // 用input 获取输入值
        // 用 this.el.nativeElement  获取原始dom
        console.log(hello);
        this.name = hello;
        console.log("!!!!!!!!!!!!!");
        console.log(this.name);
    }

    ngOnInit() {
        console.log("&&&&&&&&&&&&&&&&&");
        console.log(this.name);
    }

    constructor() {
        console.log("xxxxxxxxxxxxx");
        console.log(this.name);
        
    }
}
