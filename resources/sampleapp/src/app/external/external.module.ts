import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsComponent } from '../external/layouts/layouts.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import {FormsModule,ReactiveFormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    LayoutsComponent,
    AddComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[LayoutsComponent,AddComponent]
})
export class ExternalModule { }
