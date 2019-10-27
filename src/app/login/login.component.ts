import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  messageForm: FormGroup;
  submitted = false;
  success = false;

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService  
  ) { }

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.messageForm.invalid) {
        return;
    }

    //this.messageForm.get("name");
    //console.log(this.messageForm.value.name);
    this.dataService.login(this.messageForm.value).subscribe(res => {
      console.log(res);
    });

    this.success = true;
  }

}
