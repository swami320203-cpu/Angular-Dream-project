import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DukanamComponent } from './dukanam/dukanam.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{
  path:"",component:LoginComponent
  },{
path:"login",component:LoginComponent
},{
path:"home",component:HomeComponent
}
,{
  path:"dhukanam",component:DukanamComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
