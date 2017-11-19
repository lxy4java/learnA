import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { HelloComponent } from './hello/hello.component';
import { StoreModule } from '@ngrx/store';
import { simpleReducer } from './redux/simple.reducer'
/***
 * 
 * component  不要放入 import 里面 
 * 不然会出以下错误：
 * 
 * metadata_resolver.js:230Uncaught Error: Unexpected directive 'HelloComponent' imported by the module 'AppModule'
 */

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.forRoot({ message: simpleReducer })
  ],
  providers: [],
  bootstrap: [AppComponent, HelloComponent]
})
export class AppModule { }
