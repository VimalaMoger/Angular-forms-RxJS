
import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-built-in-directives',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './built-in-directives.component.html',
  styleUrl: './built-in-directives.component.css'
})
export class BuiltInDirectivesComponent {
  userArray: any[] = [
    {
      'country': 'UK',  //grouped by country
      user: [
        {name:'Bob',
          age:35
        },
        {name:'Raj',
          age:30
        }
      ]
    },
   
    {
      'country': 'US',
      user: [
        {name:'Sally',
          age:34
        },
        {name:'Suraj',
          age:36
        }
      ]
    }
  
  ]
}
 