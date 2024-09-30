import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-observable-impl-in-callback-reactive',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './observable-impl-in-callback-reactive.component.html',
  styleUrl: './observable-impl-in-callback-reactive.component.css'
})
export class ObservableImplInCallbackReactiveComponent {

  myForm : FormGroup;
  

  //with the FormBuilder helper
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({  
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]],
      message: ['', [Validators.required, Validators.minLength(5)]],
      lastUpdated: ['']
    });
    this.myForm.valueChanges
    .subscribe(data => {
      if( this.myForm.valid){
        data.message = data.message.replace(/<(?:.|\n)*?>/gm, '');
        data.lastUpdated =  new Date();
        console.log(JSON.stringify(data));
      }
  });
}
}