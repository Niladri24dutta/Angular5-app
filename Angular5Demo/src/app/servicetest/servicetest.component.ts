import { Component, OnInit } from '@angular/core';
import {UsersService} from '../services/user.service'

@Component({
  selector: 'app-servicetest',
  templateUrl: './servicetest.component.html',
  styleUrls: ['./servicetest.component.css']
})
export class ServicetestComponent implements OnInit {
  private user:string = '';
  
  editedUser:string = '';

  constructor(private userService:UsersService) { 
    
  }

  ngOnInit() {
    this.userService.userObservable.subscribe( user => this.user = user);
  }

  editUser(){
    this.userService.editUser(this.editedUser);
   }
}
