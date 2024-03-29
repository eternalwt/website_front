import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.less']
})
export class AddRoleComponent implements OnInit {

  title: string = "添加角色";
  editMode: boolean = false;
  id: number = 0;

  /**
   * 角色名称
   */
  roleName: string;

  /**
   * 角色描述
   */
  roleDesc: string;

  constructor(
    private dataService: DataService,
    private _Activatedroute:ActivatedRoute
  ) {
    this.id = this._Activatedroute.queryParams["value"]["id"];

    // 编辑模式
    if (this.id > 0) {
      this.editMode = true;
      this.title = "编辑角色";
      this.dataService.getRoleById(this.id).subscribe(res => {
        if (res && res["code"] == 1) {
          // todo 能否用form的变量，这里少定义2个变量
          this.roleName = res["data"]["roleName"];// todo 前端没显示，html的form写法还是有问题
          this.roleDesc = res["data"]["description"];// todo 前端没显示，html的form写法还是有问题
        }
      });
    }
  }

  ngOnInit() {
  }

  onSubmit(value) {
    if (!this.editMode) {
      // 新增
      let role = {roleName: value.roleName, description: value.roleDesc};
      this.dataService.addRole(role).subscribe(res => {
        if (res && res["code"] == 1) {
          alert("角色添加成功！"); // todo 用msgBox
  
          this.roleName = "";
          this.roleDesc = "";
        }
      });
    }
    else {
      // 编辑
      let role = {id: this.id, roleName: value.roleName, description: value.roleDesc};
      this.dataService.editRole(role).subscribe(res => {
        if (res && res["code"] == 1) {
          alert("角色编辑成功！"); // todo 用msgBox
        }
      });
    }
  }

}
