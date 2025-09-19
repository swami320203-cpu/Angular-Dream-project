import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() {

   }

   mylogin=new FormGroup({
    user:new FormControl(),
    password:new FormControl()
       })
  ngOnInit(): void {

  }
submit(){
  console.log("before");
  console.log(this.mylogin);
  console.log("after object");
}
}
