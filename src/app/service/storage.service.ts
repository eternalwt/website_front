import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  // 获取数据
  getItem(key) {
    let value = sessionStorage.getItem(key);
    return value;
  }

  // 保存数据
  setItem(key, value) {
    sessionStorage.setItem(key, value);
  }

  // 删除数据
  removeItem(key) {
    sessionStorage.removeItem(key);
  }

  getJson(key) {
    let jsonStr = sessionStorage.getItem(key);
    let obj = JSON.parse(jsonStr);
    return obj;
  }

  setJson(key, obj) {
    let jsonStr = JSON.stringify(obj);
    sessionStorage.setItem(key, jsonStr);
  }

  // 清空
  clear() {
    sessionStorage.clear();
  }

  // 获取jwt token
  getAuthorizationToken() {
    const token = sessionStorage.getItem("token")
      ? localStorage.getItem("token")
      : "";

    return token;
    // if (token) {
    //   const jwt = `Bearer ${token}`;
    //   return jwt;
    // } else {
    //   // this.router.navigate(["/passport/login"]);
    //   console.log("need login");
    // }
  }

}
