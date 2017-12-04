import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { ServicetestComponent } from './servicetest/servicetest.component';
import {UsersService} from './services/user.service'
import {FormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    StylebindingComponent,
    ServicetestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
