import { __decorate } from "tslib";
/**
 * Add 2 input forms in the following component for first name and last name. Once both forms are filled out by the user, and user has clicked out of the fields, then beside it a username should be automatically generated which should be in the following format: [firstname]_[lastname]_[random integer]
 * First name and last name should be lowercased, and then a random integer between 1 and 9 should be added to the end
 * For example: if the inputs are "John" and "DOE" the generated username could be "john_doe_4" or "john_doe_2"
 */
import { Component, NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
let UserNameComponent = class UserNameComponent {
};
UserNameComponent = __decorate([
    Component({
        selector: 'ng-app',
        template: `
                <h2>Enter your first and last name</h2>
                <div>
                </div>
                `,
        styles: []
    })
], UserNameComponent);
export { UserNameComponent };
let UserNameModule = class UserNameModule {
};
UserNameModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            RouterModule.forChild([
                {
                    path: "",
                    component: UserNameComponent
                }
            ])
        ],
        declarations: [UserNameComponent]
    })
], UserNameModule);
export { UserNameModule };
;
//# sourceMappingURL=test-04.js.map