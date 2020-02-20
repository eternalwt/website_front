import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  // 获取数据
  getItem(key) {
    let value = localStorage.getItem(key);
    return value;
  }

  // 保存数据
  setItem(key, value) {
    localStorage.setItem(key, value);
  }

  // 删除数据
  removeItem(key) {
    localStorage.removeItem(key);
  }

  getJson(key) {
    let jsonStr = localStorage.getItem(key);
    let obj = JSON.parse(jsonStr);
    return obj;
  }

  setJson(key, obj) {
    let jsonStr = JSON.stringify(obj);
    localStorage.setItem(key, jsonStr);
  }

  // 清空
  clear() {
    localStorage.clear();
  }

  // 获取jwt token
  getAuthorizationToken() {
    const token = localStorage.getItem("token")
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
