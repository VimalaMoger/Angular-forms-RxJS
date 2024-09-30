import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-observable-in-reactive',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './observable-in-reactive.component.html',
  styleUrl: './observable-in-reactive.component.css'
})
export class ObservableInReactiveComponent {

  myForm : FormGroup;
  

  //with the FormBuilder helper
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({  
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]],
      message: ['', [Validators.required, Validators.minLength(5)]],
      lastUpdated: ['']
    });
    this.myForm.valueChanges.pipe(
    filter((data) => this.myForm.valid), //filter accepts a function, returns true if all the input is valid
    map((data) =>{
      data.message = data.message.replace(/<(?:.|\n)*?>/gm, '');
      return data;
    }), //regex to remove html tags
    map((data => {
      data.lastUpdated = new Date();
      return data;
    })))
    .subscribe(data => console.log(JSON.stringify(data)));
  }
}
