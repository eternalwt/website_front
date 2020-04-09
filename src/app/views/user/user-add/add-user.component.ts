import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.less']
})
export class AddUserComponent implements OnInit {

  username: string; // 用户名
  password: string; // 密码

  roleList: any = [];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.listAllRole().subscribe(res => {
      if (res && res["code"] == 1) {
        this.roleList = res["data"].map(item => {return {roleId: item.id, roleName: item.roleName, checked: false}});
      }
    });
  }

  // saveUser() {
  //   let roleIdList = this.roleList.filter(item => item.checked).map(item => {return item.roleId});
  //   let param = {userName: this.username, password: this.password, roleIdList: roleIdList};
  //   this.dataService.addUser(param).subscribe(res => {
  //     if (res && res["code"] == 1) {
  //       alert("用户创建成功！");

  //       this.username = "";
  //       this.password = "";
  //       this.roleList.map(item => item.checked = false);
  //     }
  //   });
  // }

  // todo 1.前端报错；2.没有建立成功角色关联
  onSubmit(value) {
    let roleIdList = this.roleList.filter(item => item.checked).map(item => {return item.roleId});//todo
    debugger;
    let param = {userName: value.username, password: value.password, roleIdList: roleIdList};
    this.dataService.addUser(param).subscribe(res => {
      if (res && res["code"] == 1) {
        alert("用户创建成功！");

        this.username = "";
        this.password = "";
        this.roleList.map(item => item.checked = false);
      }
    });
  }

}
