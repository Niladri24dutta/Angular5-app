import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { DomSanitizer,SafeHtml } from '@angular/platform-browser'

@Component({
  selector: 'template-form',
  templateUrl: './template-frm.component.html',
  styleUrls: ['./template-frm.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class TemplateFrmComponent implements OnInit {
 private model : any = {
   firstname : "",
   lastname : "",
   address:"",
   department:"",
   email: "",
   phone:""
 }

 private formattedsnippet:string = '';
  constructor(private sanitizer:DomSanitizer) {
   }

  ngOnInit() {
  }
  onSubmit(){
    console.log("this");
  }

  showcode(option:string){
    if(option === "change"){
      this.formattedsnippet =  `[ngModelOptions] ="{ updateOn : 'change' } (at form control level) or [ngFormOptions] = "{ updateOn : 'change' }" (at form level)`;
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
