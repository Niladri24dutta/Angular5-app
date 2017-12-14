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

 private formattedSnippet:string = '';
 private buttonText:string
 private showCodeSnippet:boolean = false;
  constructor(private sanitizer:DomSanitizer) {
    this.buttonText = this.showCodeSnippet ? "Hide" : "Show";
   }

  ngOnInit() {
  }
  onSubmit(){
    console.log("this");
  }

  showcode(option:string){
    if(option === "change"){
      this.formattedSnippet =  `[ngModelOptions] ="{ updateOn : 'change' } (at form control level) or [ngFormOptions] = "{ updateOn : 'change' }" (at form level)`;
    }
    else if(option === "blur"){
      this.formattedSnippet =  `[ngModelOptions] ="{ updateOn : 'blur' } (at form control level) or [ngFormOptions] = "{ updateOn : 'blur' }" (at form level)`;
    }
    else if (option === "submit"){
      this.formattedSnippet = `[ngModelOptions] ="{ updateOn : 'submit' } (at form control level) or [ngFormOptions] = "{ updateOn : 'submit' }" (at form level)`;
    }
    else{
      this.formattedSnippet = "";
    }
    return this.sanitizer.bypassSecurityTrustHtml(this.formattedSnippet);
  }

  displayCodeBlock(option:string){
    this.showCodeSnippet = !this.showCodeSnippet;
    this.buttonText = this.showCodeSnippet ? "Hide" : "Show";
  }
}
