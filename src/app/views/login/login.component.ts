import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../../service/data.service';
import { StorageService } from 'src/app/service/storage.service';
import { Router } from '@angular/router';

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
    private dataService: DataService,
    private storageService: StorageService,
    private router: Router
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

    this.dataService.login(this.messageForm.value).subscribe(res => {
      debugger;
      console.log(res);
      if (res["code"] == 1) {
        // 1.userId保存到localStorage；
        this.storageService.setItem("userId", res["data"]);
        // 2.跳转到后台admin页面
        this.router.navigateByUrl("/");
      }
      else {
        // todo 提示用户名密码错误、显示验证码等
      }
    
    });

    this.success = true;
  }

}
