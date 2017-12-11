import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing} from './app.routes';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { ServicetestComponent } from './servicetest/servicetest.component';
import {UsersService} from './services/user.service'
import {FormsModule} from '@angular/forms'
import {ModalModule} from 'ngx-bootstrap/modal'
import {BsDropdownModule} from 'ngx-bootstrap/dropdown'
import {TooltipModule} from 'ngx-bootstrap/tooltip'
import {DatepickerModule} from 'ngx-bootstrap/datepicker'


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    StylebindingComponent,
    ServicetestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    DatepickerModule.forRoot()
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
