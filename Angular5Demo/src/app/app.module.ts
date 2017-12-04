import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    StylebindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
