import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.less']
})
export class AddRoleComponent implements OnInit {

  roleName: string; // 角色名称
  roleDesc: string; // 角色描述

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
  }

  saveRole() {
    let role = {roleName: this.roleName, description: this.roleDesc};
    this.dataService.addRole(role).subscribe(res => {
      if (res && res["code"] == 1) {
        alert("角色添加成功！"); // todo 用msgBox

        this.roleName = "";
        this.roleDesc = "";
      }
    });
  }

}
