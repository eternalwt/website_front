import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.less']
})
export class ToolbarComponent implements OnInit {

  constructor(
    private dataService: DataService,
    private router: Router,
    private storageService: StorageService,
  ) { }

  ngOnInit() {
  }

  logoutClick() {
    // 后端相关操作
    this.dataService.logout();
    // 清除localStorage
    this.storageService.removeItem("userId");
    // 跳转到登录页面
    this.router.navigateByUrl("/login");
  }

}
