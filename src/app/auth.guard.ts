import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Injectable({
    providedIn: 'root'
  })
  export class AuthGuard implements CanActivate {
  
    constructor(
      private router: Router,
      private dataService: DataService,
    ) {}

    // 路由守卫
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      if (!this.hasPermission(state.url)) {
        alert("No enough permission to access this page.");// todo msgBox
          // todo 路由不变，页面不抖动
          // todo 测试：1.点击链接；2.从网址输入
          return false;
      }

      return true;
    }

    checkLogin(): boolean {
      // 判断本地有没有token
      const token = sessionStorage.getItem('access_token');

      // 如果token有值，表示登录成功，继续跳转，否则跳转到首页
      if (token) { return true; }

      this.router.navigate(['/login']);
      return false;
    }

    hasPermission(url: string): boolean {
      if (sessionStorage.getItem("menu")) {
        if (url != null && url.indexOf("?") >= 0) {
          url = url.split("?")[0];
        }
        let urlList = url.split("/");
        if (sessionStorage.getItem("menu").indexOf(urlList[urlList.length - 1]) >= 0)
        return true;
      }

      return false;
    }

  }