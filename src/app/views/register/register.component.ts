import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {

  messageForm: FormGroup = new FormGroup({});

  username: string = "";
  password: string = "123456";

  submitted: boolean = false;
  success: boolean = false;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
  }

  saveUser() {

  }

  onSubmit() {
    
  }

}
