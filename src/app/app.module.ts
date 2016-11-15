import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HelloDirective } from './mydir/hello.directive';
import { XyForeachDirective } from './mydir/xyforeach.directive';


@NgModule({
  declarations: [
    AppComponent,
    HelloDirective,
    XyForeachDirective,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
