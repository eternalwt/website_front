import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Injectable({
    providedIn: 'root'
  })
  export class AuthGuard implements CanActivate {
  
      constructor(
          private router: Router,
          private dataService: DataService
          ) {
  
      }
  
      // 路由守卫
      canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
          if (!this.checkPermission()) {
              alert("no permission");
              // todo 用angular material 2的弹出框
          }
        return this.checkPermission();
      }
  
      // https://blog.csdn.net/yw00yw/article/details/89381043
      checkLogin(): boolean {
          // 判断本地有没有token
          const token = sessionStorage.getItem('access_token');
  
          // 如果token有值，表示登录成功，继续跳转，否则跳转到首页
          if (token) { return true; }
  
          this.router.navigate(['/login']);
          return false;
      }

      checkPermission(): boolean {
        //   return this.dataService.isPermitted();
        return true;
      }
  }