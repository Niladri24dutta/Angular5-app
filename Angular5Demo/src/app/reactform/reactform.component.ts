import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { DomSanitizer,SafeHtml } from '@angular/platform-browser'

@Component({
  selector: 'app-reactform',
  templateUrl: './reactform.component.html',
  styleUrls: ['./reactform.component.css']
})
export class ReactformComponent implements OnInit {

  mainForm:FormGroup;
  private formattedsnippet:string = '';
  constructor(private sanitizer:DomSanitizer) { }

  ngOnInit() {
    this.mainForm = new FormGroup({
     firstname: new FormControl('',{
      validators:Validators.required
      
     }),
     lastname:new FormControl('',{
      validators:Validators.required
      
     })
    },{updateOn:'change'});
  }

  showcode(option:string){
    if(option === "change"){
      this.formattedsnippet =  `firstname: new FormControl('',{
        validators:Validators.required,
        updateOn:'change' 
       }) (at form control level)`;
    }
    else if(option === "blur"){
      this.formattedsnippet =  `[ngModelOptions] ="{ updateOn : 'blur' } (at form control level) or [ngFormOptions] = "{ updateOn : 'blur' }" (at form level)`;
    }
    else if (option === "submit"){
      this.formattedsnippet = `[ngModelOptions] ="{ updateOn : 'submit' } (at form control level) or [ngFormOptions] = "{ updateOn : 'submit' }" (at form level)`;
    }
    else{
      this.formattedsnippet = "";
    }
    return this.sanitizer.bypassSecurityTrustHtml(this.formattedsnippet);
  }

}
