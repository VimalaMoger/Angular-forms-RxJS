import { Routes } from '@angular/router';
import { TemplateFormValidationComponent } from './template-form-validation/template-form-validation.component';
import { ReactiveFormValidationComponent } from './reactive-form-validation/reactive-form-validation.component';
import { ObservableInReactiveComponent } from './observable-in-reactive/observable-in-reactive.component';
import { ObservableImplInCallbackReactiveComponent } from './observable-impl-in-callback-reactive/observable-impl-in-callback-reactive.component';
import { BuiltInDirectivesComponent } from './built-in-directives/built-in-directives.component';

export const routes: Routes = [
    {
        path:'template',
        component: TemplateFormValidationComponent
    },
    {
        path: 'reactive',
        component: ReactiveFormValidationComponent
    },
    {
        path: 'observable-reactive',
        component: ObservableInReactiveComponent
    },
    {
        path: 'impl-callback-reactive',
        component: ObservableImplInCallbackReactiveComponent
    },
    {
        path: 'builtInD',
        component: BuiltInDirectivesComponent
    }
];
