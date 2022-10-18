/**
 * Add 2 input forms in the following component for first name and last name. Once both forms are filled out by the user, and user has clicked out of the fields, then beside it a username should be automatically generated which should be in the following format: [firstname]_[lastname]_[random integer]
 * First name and last name should be lowercased, and then a random integer between 1 and 9 should be added to the end
 * For example: if the inputs are "John" and "DOE" the generated username could be "john_doe_4" or "john_doe_2"
 */
import { Component, Input, NgModule  } from '@angular/core';
import { RouterModule} from "@angular/router";
import { CommonModule } from '@angular/common';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
    selector : 'ng-app',
    template : `
                <h2>Enter your first and last name</h2>
                <div>
                <form (submit)="submit($event)"  >
                    First Name:
                    <input  type="text" value="" name="firstname" [(ngModel)]="firstname" (change)="change()" />
                    Last Name:
                    <input  type="text" value="" name="lastname" [(ngModel)]="lastname" (change)="change()"/>
                    <input readonly type="text" value="{{this.username}}" name="username" />
                </form>
                </div>
                `,
    styles : []
})
export class UserNameComponent {
    formdata;
    @Input() firstname: string;
    @Input() lastname: string;
    username:string = "";
    submit(e){
        e.preventDefault();
    }
    ngOnInit() {
        this.formdata = new FormGroup({
           firstname: new FormControl(""),
            lastname: new FormControl(""),
            username: new FormControl("")
        });
    }
    getRandomInt(min, max) : number{
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; 
    }
    change() {
        if (this.firstname && this.lastname) {
            this.username = (this.firstname+"_"+this.lastname+"_"+this.getRandomInt(1,9)).toLowerCase();
        }
        

    }
}

@NgModule({
    imports : [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            {
                path : "",
                component : UserNameComponent
            }
        ])
    ],
    declarations : [UserNameComponent]
})
export class UserNameModule {};