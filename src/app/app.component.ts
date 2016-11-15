import { Component } from '@angular/core';

import { HelloDirective } from './mydir/hello.directive';
import { XyForeachDirective } from './mydir/xyforeach.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ HelloDirective,XyForeachDirective]
})
export class AppComponent {
  title = 'app works!';
  names = ['java', 'go', 'php', 'python', 'cpp', 'swift', 'node', 'ruby', 'c']
  usr={"age":26,"name":"lixy"}
  login = '登录'
  click() {
    if (this.login == '登录') {
      this.login = '退出'
    } else {
      this.login = '登录'
    }
  }
}
