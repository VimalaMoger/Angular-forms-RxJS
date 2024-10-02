import { CommonModule } from '@angular/common';
import { Component, Inject, Injectable, Injector } from '@angular/core';

/**
 * The following code uses injectors to manage dependency between components and services
 * Creates UserService that fetches user data and component which displays the data
 *  */ 

//Using decorator
@Injectable()
 export class UserService{
  private users = [
    {id: 1, name:"Pranav"},
    {id:2, name:"John"}
  ];

  getUsers(){
    return this.users;
  }
}

@Component({
  selector: 'app-dependency-injection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dependency-injection.component.html',
  styleUrl: './dependency-injection.component.css'
})
export class DependencyInjectionComponent {
  users = <any[]>[];

  constructor(private userService: UserService){
    this.users = userService.getUsers();
  }
  
//Using @Inject decorator
/*    constructor( @Inject(UserService) private userService: UserService){
    this.users = userService.getUsers();
  } 
} */

}


