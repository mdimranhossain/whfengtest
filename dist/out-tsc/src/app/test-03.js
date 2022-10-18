import { __decorate } from "tslib";
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
import { Component, NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
let Test03Component = class Test03Component {
    constructor() {
        this.email = "";
        this.password = "";
        this.logged_in = false;
    }
};
Test03Component = __decorate([
    Component({
        selector: 'ng-app',
        template: `<form>
                    <h2>Login</h2>
                    <br/>
                    <input type="email" value="" name="email" />
                    <br/>
                    <input type="password" value="" name="password" />
                    <button type="submit">Submit</button>
                    <br/><br/>
                    <div *ngIf="logged_in">Logged In!</div>
                </form>`
    })
], Test03Component);
export { Test03Component };
let Test03Module = class Test03Module {
};
Test03Module = __decorate([
    NgModule({
        imports: [
            CommonModule,
            RouterModule.forChild([
                {
                    path: "",
                    component: Test03Component
                }
            ])
        ],
        declarations: [Test03Component]
    })
], Test03Module);
export { Test03Module };
;
//# sourceMappingURL=test-03.js.map