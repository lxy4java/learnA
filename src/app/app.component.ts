import { Component } from '@angular/core';
import { UsrService } from './usr/usr.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsrService]
})
export class AppComponent {
  
  constructor(private usr: UsrService) {
    usr.getUsr10s().then(user => {
      console.log(user);
      this.user=user;
    });
  }

  title = 'app works!';
  user = { }
}

/**** 这里的user 如果 不赋值{} 外面是访问不到值的，输出全是object */