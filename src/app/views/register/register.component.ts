import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {

  username: string;
  password: string = "123456";

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
  }

  saveUser() {

  }

}
