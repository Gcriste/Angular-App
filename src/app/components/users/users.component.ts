import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;

  constructor() { }

  ngOnInit() {

    // setTimeout(() => {
      this.users = [
      {
       firstName: 'Griffin',
       lastName: 'Criste',
       age: 29,
       address:{
           street: '50 main street',
           city: 'Nashville',
           state: 'TN'
       }
   },
    {
     firstName: 'Kevin',
     lastName: 'Bacion',
     age: 35,
     address:{
         street: '225 school street',
         city: 'Boston',
         state: 'MA'
     }
 },
  {
   firstName: 'Karen',
   lastName: 'Williams',
   age: 23,
   address:{
       street: '583 Mill Street',
       city: 'Austin',
       state: 'TX'
   }
}
   ];
   this.loaded = true;

    // }, 2000)
    
    this.addUser({
      firstName: 'David',
      lastName: 'Jackson'
  })
  }

  addUser(user: User){
    this.users.push(user);
  }

}
