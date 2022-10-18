/**
 * In the following component, update the code so that when the value of the [loan-amount] is changed:
 * * If it's blank or 0, the values of [monthly_payment] and [late_payment] becomes "N/A",
 * * If it has a value, the value of [monthly_payment] becomes 2% of [loan-ammount] and the value of [late_payment] becomes 5% of [monthly_payment].
 * * Both [monthly_payment] and [late_payment] should print in the template in currency format : $1,234
 */
import { __decorate } from "tslib";
import { Component, NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
let Test01Component = class Test01Component {
    constructor() {
        this.loan_amount = 20000;
        this.monthly_payment = 200;
        this.late_payment = 10;
    }
    ngOnInit() {
        if (this.loan_amount !== '' || this.loan_amount > 0) {
            this.monthly_payment = this.loan_amount * 2 / 100;
            this.late_payment = this.monthly_payment * 5 / 100;
        }
        else {
            this.monthly_payment = 'N/A';
            this.late_payment = 'N/A';
        }
    }
};
Test01Component = __decorate([
    Component({
        selector: 'ng-app',
        template: `<div>
                    <h2>Loan Details</h2>
                    <b>Monthly Payment:</b> {{monthly_payment}} <br/>
                    <b>Late Payment Fee : {{late_payment}}</b> <br/>
                </div>`
    })
], Test01Component);
export { Test01Component };
let Test01Module = class Test01Module {
};
Test01Module = __decorate([
    NgModule({
        imports: [
            RouterModule.forChild([
                {
                    path: "",
                    component: Test01Component
                }
            ])
        ],
        declarations: [Test01Component]
    })
], Test01Module);
export { Test01Module };
//# sourceMappingURL=test-01.js.map