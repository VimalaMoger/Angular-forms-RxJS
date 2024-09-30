import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder,  FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-form-validation',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-form-validation.component.html',
  styleUrl: './reactive-form-validation.component.css'
})
export class ReactiveFormValidationComponent{
  myForm: FormGroup;
  

/* 
//initializing properties
  constructor(){
   this.myForm = new  FormGroup({
       name: new FormControl('Robin', Validators.required),
       email: new FormControl('', [Validators.required, Validators.email]),
       message: new FormControl('', [Validators.required, Validators.minLength(5)])
   })
 } */

   
  //with the FormBuilder helper
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({  
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]],
      message: ['', [Validators.required, Validators.minLength(5)]],
      lastUpdated: ['']
    });
  }

  onSubmit(form: FormGroup) {
     console.log('Valid?', form.valid); // true or false
     console.log('Name', form.value.name);
     console.log('Email', form.value.email);
     console.log('Message', form.value.message);
  }  
}




