import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {

  username: string;
  password: string = "123456";

  constructor() { }

  ngOnInit() {
  }

  saveUser() {

  }

}
