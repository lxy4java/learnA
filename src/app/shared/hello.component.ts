import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-hello',
    templateUrl: './hello.component.html',
    styleUrls: ['./hello.component.css']
})
export class HelloComponent {

    @Input() set name (name: string){
        console.log(name);
    }
    title = 'app works!';

    constructor() {
        console.log(this.name);
    }
}
