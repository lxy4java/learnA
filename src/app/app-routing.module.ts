import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NodeComponent } from './router/node.component';
import { PythonComponent } from './router/python.component';
import { PhpComponent } from './router/php.component';
import { JavaComponent } from './router/java.component';
import { AndroidComponent } from './router/android.component';
import { CComponent } from './router/c.component';
import { CppComponent } from './router/cpp.component';
import { GoComponent } from './router/go.component';


/****
 * 
 * 定义路由数组 
 */
const routes: Routes = [
  {
    path: 'node', component: NodeComponent
  },
  {
    path: 'php', component: PhpComponent
  },
  {
    path: 'java', component: JavaComponent,
    children: [{ path: "" },

    {
      path: "android",
      component: AndroidComponent
    }
    ]
  },
  {
    path: 'python', component: PythonComponent
  },
  {
    path: '', component: JavaComponent
  },
  {
    path: 'c/c', component: CComponent
  },
  {
    path: 'cpp', component: CppComponent
  }, {
    path: 'go', component: GoComponent
  }
];
/****
 * 
 * 声明各个component ，import进路由： RouterModule.forRoot(routes)
 */
@NgModule({
  declarations: [
    NodeComponent, PhpComponent, JavaComponent,
    PythonComponent, AndroidComponent, CComponent,
    CppComponent,GoComponent
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],

})
export class LearnARoutingModule { }

/****
 * angular 的 路由模块  其中作为路由的component 并没有在app.module 中注册，所以不
 * 能这样使用 <java></java> 
 * 后面会演示 angular 路由的更多用法，
 * 
 * 
 */