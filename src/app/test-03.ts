/**
 * Update the following components to meet the requirements : 
 * 
 * * Bind [email] property to input[name="email"]
 * * Bind [password] property to input[name="password"]
 * 
 * Without using angular forms, validate both fields so that :
 * * email is in correct format ( ex: ends with @a.com)
 * * password contains at least one special character, one upper case character, one lower case character, one number and a minium of 8 characters in length
 * * The fields should be validated when trying to submit the form
 * * Prevent the form from doing an actual form submit and instead, after validation pass, turn on the [logged_in] flag
 * 
 * You can add error messages below each field that shows if the field is not valid
 */
import { Component, ElementRef, NgModule, ViewChild  } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
    selector : 'ng-app',
    template : `<form (submit)="submit($event)" [formGroup] = "formdata" (ngSubmit) = "validate(formdata.value)" >
                    <h2>Login</h2>
                    <br/>
                    <input formControlName="email" type="email" value="" name="email" />
                    <br>
                    <div *ngIf="emailerror">
                        {{emailerror}}
                    </div>
                    <br/>
                    <input formControlName="password" type="password" value="" name="password" />
                    <br>
                    <div *ngIf="passworderror">{{passworderror}}</div>
                    <button type="submit">Submit</button>
                    <br/><br/>
                    <div *ngIf="logged_in">Logged In!</div>
                </form>`
})
export class Test03Component {
    formdata;
    email:string = "";
    password:string = "";
    emailerror: string = "";
    passworderror: string = "";
    logged_in = false;
    error: boolean= false;
    ngOnInit() {
        this.formdata = new FormGroup({
           email: new FormControl(""),
           password: new FormControl("")
        });
     }
    validate(data) {
        console.log(data);
        var result;
        var pattern;
        pattern = new RegExp('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$');
        result = pattern.test(data.email);
        if (!result) {
            this.emailerror = "Write a email address correctly.";
            //this.error = true;
        } else {
            this.emailerror = "";
            //this.error = false;
        }
        pattern = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$');
         result = pattern.test(data.password);
        if (!result) {
            //this.error = true;
            this.passworderror="password contains at least one special character, one upper case character, one lower case character, one number and a minium of 8 characters in length."
        } else {
            this.passworderror = "";
            //this.error = false;
        }
        // if (this.error) {
        //     return false;
        // }
        this.email = data.email;
        this.password = data.password;

    }
    submit(e){
        e.preventDefault();
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
                component : Test03Component
            }
        ])
    ],
    declarations : [Test03Component]
})
export class Test03Module {};