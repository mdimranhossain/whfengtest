import { __decorate } from "tslib";
/**
 * Update the following components to meet the requirements :
 * * Bind `field` of [textfield] component to its text input
 * * Pass value of `field` from [textfield] component to [title] property of component [ng-app]
 */
import { Component, NgModule, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
let TextField = class TextField {
    constructor() {
        this.field = "";
        this.fieldChanged = new EventEmitter();
    }
    ngOnInit() {
        this.field = "Testing Title";
    }
    changeTitle() {
        this.fieldChanged.emit(this.field);
    }
};
__decorate([
    Output()
], TextField.prototype, "fieldChanged", void 0);
TextField = __decorate([
    Component({
        selector: 'textfield',
        template: '<input #title type="text" [(ngModel)]="field" (keyup)="changeTitle()" />'
    })
], TextField);
export { TextField };
let ChildComponent = class ChildComponent {
    constructor() { }
    ngOnInit() {
    }
    onChangeTitle(field) {
        this.title = field;
    }
};
ChildComponent = __decorate([
    Component({
        selector: 'child-component',
        template: `<h2>Title:<h2><br/><textfield (changeTitle)="onChangeTitle($event)">{{title}}</textfield>`
    })
], ChildComponent);
export { ChildComponent };
let Test02Component = class Test02Component {
};
Test02Component = __decorate([
    Component({
        selector: 'ng-app',
        template: `<div>
                    <child-component></child-component> <br/>
                    Title is {{title}}
                </div>`
    })
], Test02Component);
export { Test02Component };
let Test02Module = class Test02Module {
};
Test02Module = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            RouterModule.forChild([
                {
                    path: "",
                    component: Test02Component
                }
            ])
        ],
        declarations: [Test02Component, ChildComponent, TextField]
    })
], Test02Module);
export { Test02Module };
;
//# sourceMappingURL=test-02.js.map