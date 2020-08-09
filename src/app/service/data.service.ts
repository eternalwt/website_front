import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://reqres.in/api/users');
  }

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

  addUser(param) {
    return this.http.post(environment.baseUrl + "user/add", param);
  }

  listUser(param) {
    return this.http.post(environment.baseUrl + "user/list", param);
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

  addMenu(menu) {
    return this.http.post(environment.baseUrl + `menu/add`, menu);
  }

  getMenuList(userId: number) {
    return this.http.get(environment.baseUrl + `menu/selectByUserId?userId=${userId}`);
  }

  getPermissionListByUserId(userId) {
    return this.http.get(environment.baseUrl + `menu/getPermissionListByUserId?userId=${userId}`);
  }

  getAllPermissionList() {
    return this.http.get(environment.baseUrl + `menu/getAllPermissionList`);
  }

  getMenuTree() {
    return this.http.get(environment.baseUrl + `menu/getMenuTree`);
  }

  // todo menu没用的方法干掉
  getRolePermissionListMap() {
    return this.http.get(environment.baseUrl + `menu/getRolePermissionListMap`);
  }

  updatePermission(menuList) {
    return this.http.post(environment.baseUrl + `menu/updatePermission`, menuList);
  }

  addArticle(param) {
    return this.http.post(environment.baseUrl + `article/add`, param);
  }

  listArticle(param) {
    return this.http.post(environment.baseUrl + "article/list", param);
  }

}
