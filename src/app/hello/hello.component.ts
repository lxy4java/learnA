import { Component, OnInit } from '@angular/core';

/***用cli 创建 component , 这里代码简单没用 模版  */
@Component({
    selector: 'hello',
    templateUrl: 'hello.component.html'
})
export class HelloComponent implements OnInit {
    
    title='hello';
    constructor() { }
    dsp='inline';
    show={
        'display':this.dsp
    }
    ngOnInit() { }
    change(){
        if(this.dsp==='inline'){
            this.dsp='none';
            this.show={
                'display': 'none'
            }
        }else{
            this.dsp='inline'
            this.show={
                'display': 'inline'
            }
        }
        console.log(this.dsp)
        console.log(this.show)
    }
}