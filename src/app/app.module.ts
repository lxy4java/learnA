import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { LearnARoutingModule } from './app-routing.module';

/**** 
 * 在 app 中引入 路由模块 并 imports 进去
*/


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LearnARoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
