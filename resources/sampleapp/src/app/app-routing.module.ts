import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddComponent} from './external/add/add.component';
import {ListComponent} from './external/list/list.component';

const routes: Routes = [{
  path:'add',component:AddComponent
  
},{
  path:'list',component:ListComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
