import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../../service/data.service';
import { StorageService } from 'src/app/service/storage.service';
import { Router } from '@angular/router';
import { of, concat, interval } from 'rxjs';
import { tap, map } from 'rxjs/operators';

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
    private router: Router,
  ) { }

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // todo 如果已经登录，则直接redirect到home
    if (localStorage.getItem("userId")) {
      this.router.navigateByUrl("/home");
    }

  }
  

  onSubmit() {
    this.submitted = true;

    if (this.messageForm.invalid) {
        return;
    }


    this.dataService.login(this.messageForm.value).subscribe(res => {
    // this.dataService.jwtLogin(this.messageForm.value).subscribe(res => {
      console.log(res);
      if (res["code"] == 1) {
        // 1.userId保存到localStorage；
        this.storageService.setItem("userId", res["data"]);

        // this.dataService.isPermitted().subscribe(res => {
        //   debugger;
        //   // 2.跳转到后台admin页面
        //   this.router.navigateByUrl("/home");
        // });
        this.router.navigateByUrl("/home");
        
      } else {
        // todo 展示出来：Your name is required、A password is required
        // todo 提示用户名密码错误、显示验证码等（Angular Material 2）
      }
    });
  }

}
