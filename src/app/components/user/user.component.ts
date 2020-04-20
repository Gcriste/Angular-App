import { Component } from '@angular/core';
import { User } from '../../models/User';

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
    // firstName: string;
    // lastName: string;
    // age: number;
    // address;

    // foo: any;
    // hasKids: boolean;
    // numberArray: number[];
    // stringArray: string[];
    // mixedArray: any[];
    // myTuple: [string, number, boolean];
    // unusuable: void;
    // u: undefined;
    // n: null;

    user: User


    //methods
    constructor() {
        this.user = {
            firstName: 'Griffin',
            lastName: 'Criste',
            age: 29,
            address:{
                street: '50 main street',
                city: 'Nashville',
                state: 'TN'
            }
        }



    //   this.firstName = 'John';
    //   this.lastName = 'Doe';
    //   this.age = 30;
    //   this.address = {
    //       street: '50 Main Street',
    //       city: 'Nashville',
    //       state: 'TN'
    //   }

    //   this.foo = true;
    //   this.hasKids = true;
    //   this.numberArray = [1,4,5];
    //   this.stringArray = ['Griffin', 'Joe', 'Marvin'];
    //   this.mixedArray = ['Griffin', undefined, 4, true];
    //   this.myTuple = ['John', 4, true ];
    //   this.unusuable = undefined;
    //   this.u = undefined;
    //   this.n = null;

    //   console.log(this.addNumbers(2,3))
    }

    // showAge(){
    //     return this.age;
    // }

    // addNumbers(num1:number, num2:number): number{
    //     return num1 + num2;
    // }
}

