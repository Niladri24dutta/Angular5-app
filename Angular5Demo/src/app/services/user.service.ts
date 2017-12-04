import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsersService{
  private user  = new BehaviorSubject<string>("Niladri");
  userObservable:Observable<string> = this.user.asObservable();

  constructor() {

  }

  editUser(userName:string){
      this.user.next(userName);
  }

}