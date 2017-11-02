import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-hello',
    templateUrl: './hello.component.html',
    styleUrls: ['./hello.component.css']
})
export class HelloComponent {

    @Input() name: string;
    title = 'app works!';

    constructor() {
        console.log(this.name);
    }
}
