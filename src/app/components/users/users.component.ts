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
  currentClasses = {};

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
       },
       image: 'http://lorempixel.com/600/600/people/2',
       isActive: true
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
     image: 'http://lorempixel.com/600/600/people/3',
     isActive: false
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
   image: 'http://lorempixel.com/600/600/people/1',
   isActive: true
}
   ];
   this.loaded = true;

    // }, 2000)
    
  //   this.addUser({
  //     firstName: 'David',
  //     lastName: 'Jackson'
  // })
  this.setCurrentClasses();
  }

  addUser(user: User){
    this.users.push(user);
  }


  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd,
      'big-text': this.showExtended
    }
  }
}
