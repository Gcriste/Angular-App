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
  enableAdd: boolean = true;

  constructor() { }

  ngOnInit() {
      this.users = [
      {
       firstName: 'Griffin',
       lastName: 'Criste',
       age: 29,
       address:{
           street: '50 main street',
           city: 'Nashville',
           state: 'TN'
       },
       isActive: true,
       registered: new Date('01/02/2020 08:30:00')
   },
    {
     firstName: 'Kevin',
     lastName: 'Bacion',
     age: 70,
     address:{
         street: '225 school street',
         city: 'Boston',
         state: 'MA'
     },
     isActive: false,
     registered: new Date('03/12/2019 06:30:00')
 },
  {
   firstName: 'Karen',
   lastName: 'Williams',
   age: 23,
   address:{
       street: '583 Mill Street',
       city: 'Austin',
       state: 'TX'
   },
   isActive: true,
   registered: new Date('11/02/2018 10:30:00')
}
   ];
   this.loaded = true;
  }

  addUser(user: User){
    this.users.push(user);
  }
}
