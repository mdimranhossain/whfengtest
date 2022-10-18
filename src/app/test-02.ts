/**
 * Update the following components to meet the requirements : 
 * * Bind `field` of [textfield] component to its text input
 * * Pass value of `field` from [textfield] component to [title] property of component [ng-app]
 */

import { Component, NgModule, Input,AfterViewChecked, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
 import { RouterModule } from "@angular/router";
 import { CommonModule } from '@angular/common';
 @Component({
     selector : 'textfield',
     template : '<input  type="text"  [(ngModel)]="field" value="" />'
 })
 export class TextField {
     @Input() field: string;
 }
 
 @Component({
     selector : 'child-component',
     template : `<h2>Title:<h2><br/><textfield #TextField ></textfield>`
 })
 export class ChildComponent {
    @ViewChild('TextField') TextField;
 }
 
 
 @Component({
     selector : 'ng-app',
     template : `<div>
                     <child-component #childcomponent></child-component> <br/>
                     Title is {{title}}
                 </div>`
 })
 export class Test02Component {
    @ViewChild('childcomponent') childcomponent;
     title: string = "";
     ngAfterViewChecked() {
        this.title=this.childcomponent.TextField.field;
      }
 }
 
 @NgModule({
     imports : [
         CommonModule,
         FormsModule,
         RouterModule.forChild([
             {
                 path : "",
                 component : Test02Component
             }
         ])
     ],
     declarations : [Test02Component,ChildComponent,TextField]
 })
 export class Test02Module {};