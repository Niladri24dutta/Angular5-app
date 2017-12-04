import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public user:string = "Niladri";
  public successClass = "text-success";
  public hasError:boolean = true;
  public isSpecial:boolean = true;
  public messagesTypes = {
    "text-success":!this.hasError,
    "text-danger":this.hasError,
    "text-special" : this.isSpecial
  }
  constructor() { }

  ngOnInit() {
  }

  changeMessageType(){
    this.hasError = !this.hasError;
  }

}
