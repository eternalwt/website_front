import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../../service/data.service';
import { StorageService } from 'src/app/service/storage.service';
import { Router } from '@angular/router';
import { MessageBoxService } from '../../service/message-box.service';

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
    private MessageBoxService: MessageBoxService
  ) { }

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // todo 如果已经登录，则直接redirect到home
    /* 1.ShiroConfig里面鉴权的地方，除了登录页其他页都需要登录鉴权；
       2.前端如何使用sessionStorage来做登录页的已登录自动redirect功能？
       2.localStorage应该改成sessionStorage把？另外如何跟rememberMeCookie相关联？；
       3.再看storage的场景，用好storage（既要发挥作用，又不要搞出一堆状态难以管理）
    */
    if (this.storageService.getJson("user")) {
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
      if (res && res["code"] == 1) {
        // 1.userId保存到sessionStorage；
        this.storageService.setJson("user", res["data"]);

        // this.dataService.isPermitted().subscribe(res => {
        //   debugger;
        //   // 2.跳转到后台admin页面
        //   this.router.navigateByUrl("/home");
        // });
        this.router.navigateByUrl("/home/main");
        // this.router.navigate
      } else {
        // alert("登录失败：" + res["msg"]);// todo msgBox
        this.MessageBoxService.showMsg("登录失败", res["msg"]);
      }
    });
  }

}
