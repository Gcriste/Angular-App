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
  currentStyles = {};

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
       isActive: true,
       balance: 100,
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
     image: 'http://lorempixel.com/600/600/people/3',
     isActive: false,
     balance: 200,
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
   image: 'http://lorempixel.com/600/600/people/1',
   isActive: true,
   balance: 50,
   registered: new Date('11/02/2018 10:30:00')
}
   ];
   this.loaded = true;

    // }, 2000)
    
  //   this.addUser({
  //     firstName: 'David',
  //     lastName: 'Jackson'
  // })
  this.setCurrentClasses();
  this.setCurrentStyles();
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

  setCurrentStyles(){
    this.currentStyles ={
      'padding-top': this.showExtended ? '0' : '40px',
      'font-size': this.showExtended ? '' : '40px'
    }
  }
}
