import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { HiComponent } from './hi/hi.component';
import { DataAndEventBindingComponent } from './data-and-event-binding/data-and-event-binding.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';

@NgModule({
  //declarations noi khai bao component , khi da khai bao o day thi khong duowc khai bao o mot noi khac
  declarations: [
    AppComponent,
    HelloComponent,
    HiComponent,
    DataAndEventBindingComponent,
    StructuralDirectiveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//AppModule la TypeScript Module
//NgModule la TypeScript Decorator cung cap Metadata: data about adta
//bootstrapModule se tim den cai bootstrap dau tien cua du an


