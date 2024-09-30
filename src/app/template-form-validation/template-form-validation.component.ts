import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormsModule, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-template-form-validation',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-form-validation.component.html',
  styleUrl: './template-form-validation.component.css'
})
export class TemplateFormValidationComponent {
 
  //initializing user object
  user: any = {
    name:'',
    email:'',
    message:''
  } 
//viewchild decorator to form property to hold an instance of NgForm
  @ViewChild('userForm') form: any  //for resetting the form data

  onSubmit(form: NgForm) {
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.name);
    console.log('Email', form.value.email);
    console.log('Message', form.value.message);
    this.form.reset();
 } 

}
