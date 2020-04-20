import { Component } from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
    // template:'<h2>John Doe</h2>',
    // styles:[`
    // h2{
    //     color:blue
    // }`]
})

export class UserComponent {
    //properties
    firstName: string;
    lastName: string;
    age: number;
    address;

    foo: any;
    hasKids: boolean;
    numberArray: number[];
    stringArray: string[];
    mixedArray: any[];
    myTuple: [string, number, boolean];
    unusuable: void;
    u: undefined;
    n: null;


    //methods
    constructor() {
      this.firstName = 'John';
      this.lastName = 'Doe';
      this.age = 30;
      this.address = {
          street: '50 Main Street',
          city: 'Nashville',
          state: 'TN'
      }

      this.foo = true;
      this.hasKids = true;
      this.numberArray = [1,4,5];
      this.stringArray = ['Griffin', 'Joe', 'Marvin'];
      this.mixedArray = ['Griffin', undefined, 4, true];
      this.myTuple = ['John', 4, true ];
      this.unusuable = undefined;
      this.u = undefined;
      this.n = null;
    }

    showAge(){
        return this.age;
    }
}