import { Component, OnInit  } from '@angular/core';
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

export class UserComponent implements OnInit{
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

    user: User;


    //methods
    constructor() {
     
    }

    ngOnInit(){
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

    }

 
}

