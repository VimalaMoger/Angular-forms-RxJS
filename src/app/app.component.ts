
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateFormValidationComponent } from "./template-form-validation/template-form-validation.component";
import { ReactiveFormValidationComponent } from "./reactive-form-validation/reactive-form-validation.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TemplateFormValidationComponent, ReactiveFormValidationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

 }













 

