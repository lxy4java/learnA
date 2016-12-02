import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';

@Component({
    selector: 'hero-form',
    templateUrl: 'heroform.component.html'
})
export class HeroformComponent implements OnInit {
    constructor() { }

    ngOnInit() { }


    powers = ['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer'];
    model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

    submitted = false;

    onSubmit() { this.submitted = true; 
        console.log(JSON.stringify(this.model));    
    }

    ///TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }
}