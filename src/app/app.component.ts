import { Component } from '@angular/core';

import { Http }       from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  name="";
  constructor(private http: Http) {}
  check() {
     console.log("check");
     this.http
               .get('http://localhost:4200/proxy?name='+this.name).subscribe((data)=>{
                 console.log(data);
                 var  t= data.text();
                 console.log(t);
                 this.title=t;
               });   
         
  }

}
