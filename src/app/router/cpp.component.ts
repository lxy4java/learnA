import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'cpp',
    template: '<h1>哈？听说{{name}}要超过我。</h1>'
})
export class CppComponent implements OnInit, OnDestroy {
    constructor(private route: ActivatedRoute) { }
    name = 'go'
    ngOnInit() {
       /***  console.log(this.route.params.subscribe(params=>{
            console.log(params);
        }))
        ***/
     console.log(this.route.snapshot.params['key']);
     this.name= this.route.snapshot.params['key'];
    }

    ngOnDestroy() {

    }
}