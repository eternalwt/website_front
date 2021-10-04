import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  login(params) {
    return this.http.post(environment.baseUrl +  `auth/login?username=${params.username}&password=${params.password}`, null);
  }

  logout() {
    return this.http.get(environment.baseUrl +  `auth/logout`);
  }

  jwtLogin(params) {
    return this.http.post(environment.baseUrl +  `auth/jwtlogin?username=${params.username}&password=${params.password}`, null);
  }

  isPermitted() {
    return this.http.get(environment.baseUrl +  `permission/isPermitted`);
  }

  updatePermission(menuList) {
    return this.http.post(environment.baseUrl + `menu/updatePermission`, menuList);
  }

  addUser(param) {
    return this.http.post(environment.baseUrl + "user/add", param);
  }

  listUser(param) {
    return this.http.post(environment.baseUrl + "user/list", param);
  }

  listUserDetail(param) {
    // todo 添加角色的获取，然后替换user-list.component.ts里面的listUser方法
  }

  addRole(param) {
    return this.http.post(environment.baseUrl + "role/add", param);
  }

  editRole(param) {
    return this.http.post(environment.baseUrl + "role/edit", param);
  }

  getRoleById(id) {
    return this.http.get(environment.baseUrl + `role/getById?id=${id}`)
  }

  listRole(param) {
    return this.http.post(environment.baseUrl + "role/list", param);
  }

  listAllRole() {
    return this.http.get(environment.baseUrl + "role/alllist");
  }

  getMenuListByRole(roleId) {
    return this.http.get(environment.baseUrl + `menu/getMenuListByRole?roleId=${roleId}`);
  }

  getMenuListByUserId(userId) {
    return this.http.get(environment.baseUrl + `menu/getMenuListByUserId?userId=${userId}`);
  }

  addMenu(menu) {
    return this.http.post(environment.baseUrl + `menu/add`, menu);
  }

  getAllMenuList() {
    return this.http.get(environment.baseUrl + `menu/list`);
  }

  getMenuTree() {
    return this.http.get(environment.baseUrl + `menu/getMenuTree`);
  }

  addArticle(param) {
    return this.http.post(environment.baseUrl + `article/add`, param);
  }

  listArticle(param) {
    return this.http.post(environment.baseUrl + "article/list", param);
  }

}
