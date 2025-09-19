import { BrowserModule } from '@angular/platform-browser';
import { Compiler, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { RouterModule, Routes } from '@angular/router';
import { RouterModule, Routes } from '@angular/router'
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DukanamComponent } from './dukanam/dukanam.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
  declarations: [
    AppComponent,
    HeaderComponent,LoginComponent,HomeComponent,DukanamComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),MatToolbarModule, BrowserAnimationsModule,ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
