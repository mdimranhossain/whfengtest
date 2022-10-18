/**
 * In the following component, update the code so that when the value of the [loan-amount] is changed:
 * * If it's blank or 0, the values of [monthly_payment] and [late_payment] becomes "N/A",
 * * If it has a value, the value of [monthly_payment] becomes 2% of [loan-ammount] and the value of [late_payment] becomes 5% of [monthly_payment].
 * * Both [monthly_payment] and [late_payment] should print in the template in currency format : $1,234
 */

import { Component, Input, NgModule } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterModule } from "@angular/router";

@Component({
    selector : 'ng-app',
    template : `<div>
                    <h2>Loan Details</h2>
                    <b>Loan Amount:</b> {{loan_amount}} <br/>
                    <b>Monthly Payment:</b> {{monthly_payment}} <br/>
                    <b>Late Payment Fee : {{late_payment}}</b> <br/>
                </div>`
})
export class Test01Component {

    loan_amount:any = 2000000;
    monthly_payment:any = 200;
    late_payment: any = 10;
    
    constructor(private currencyPipe:CurrencyPipe) {
        this.monthly_payment = this.loan_amount*2/100;
        this.late_payment = this.monthly_payment*5/100;
    }

    ngOnInit(){
        if (this.loan_amount > 0) {
            this.loan_amount = this.currencyPipe.transform(this.loan_amount,'USD');
            this.monthly_payment = this.currencyPipe.transform(this.monthly_payment,'USD');
            this.late_payment = this.currencyPipe.transform(this.late_payment,'USD');
        } else {
            this.monthly_payment = 'N/A';
            this.late_payment = 'N/A';
        }
    }
}

@NgModule({
    imports : [
        RouterModule.forChild([
            {
                path : "",
                component : Test01Component
            }
        ])
    ],
    declarations: [Test01Component],
    providers:[CurrencyPipe]
})
export class Test01Module {}