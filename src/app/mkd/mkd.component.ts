import { Component, OnInit } from '@angular/core';
import { MarkdownService } from 'angular2-markdown';

@Component({
  selector: 'app-mkd',
  templateUrl: './mkd.component.html',
  styleUrls: ['./mkd.component.css']
})
export class MkdComponent implements OnInit {

  data = '## 124';

  constructor(private _markdown: MarkdownService) {
  
   
   }

  ngOnInit() {
    
    this._markdown.renderer.blockquote = (xxx: String) => {
      return `<blockquote class="king-quote">${xxx}</blockquote>`;
    }
    
  }

}
