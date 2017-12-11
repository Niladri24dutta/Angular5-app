import { Component } from '@angular/core';
import {UsersService} from './services/user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular5 demo';

 constructor(private userService:UsersService) {

 }
  
}
