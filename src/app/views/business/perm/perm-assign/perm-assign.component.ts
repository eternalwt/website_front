import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-perm-assign',
  templateUrl: './perm-assign.component.html',
  styleUrls: ['./perm-assign.component.less']
})
export class PermAssignComponent implements OnInit {

  constructor(
    private dataService: DataService
  ) {}

  roleId: any | null = null;

  roleList: any[] = [];

  /**
   * 菜单资源
   */
  menuList: any[] = [];

  permList: any[] = [];

  ckd: boolean = false;

  ngOnInit() {

    // todo 1.要能分类【资源类别】；2.要能够分级授权【数据权限】；3.要能够有某些勾选的不能编辑【用户、角色权限，后面再考虑用户权限】

    // 读取角色列表
    this.dataService.listAllRole().subscribe(res => {
      if (res && res["code"] == 1) {
        this.roleList = res["data"];
      }
    });

    // 获取菜单资源列表
    this.dataService.getAllMenuList().subscribe(res => {
      if (res && res["code"] == 1) {
        this.menuList = res["data"];
      }
    });
  }

  getRoleOptions() {
    console.log(this.roleId);
    // 获取该角色已经有了的菜单资源权限
    this.dataService.getMenuListByRole(this.roleId).subscribe(res => {
      // 通过获取的数据，给menuList的每个item附上hasPerm字段
      if (res && res["code"] == 1) {
        this.permList = res["data"];
        for (let i = 0; i < this.menuList.length; i++) {// todo 改造成函数式写法
          this.menuList[i]["hasPerm"] = false;
          for (let j = 0; j < this.permList.length; j++) {
            if (this.permList[j].id == this.menuList[i].id) {
              this.menuList[i]["hasPerm"] = true;
              break;
            }
          }
        }
      }
    });
  }


  /**
   * 保存角色对应的权限
   */
  savePermission() {

    // todo 重新实现 updatePermission 方法，dataService里面【包括前端和后端】



    // let menuList: any[] = [];
    // // todo 组装map。这样是为了后端不再定义vo，这种方法好不好有待商榷
    // // todo 一次性发送给后端【既要保证效率，又要逻辑清晰】
    // for (let i = 0; i < this.menuList.length; i++) {
    //   for (let j = 0; j < this.menuList[i].permList.length; j++) {
    //     // 使用map还是json？或者两者都试一下？
    //     menuList.push({perm: this.menuList[i].permList[j].key, checked: this.menuList[i].permList[j].checked, roleName: this.menuList[i].roleName});
    //   }
    // }

    // // todo 还有个大漏洞，没有判断checked
    // this.dataService.updatePermission(menuList).subscribe(res => {
    //   alert("保存成功!");// todo 1.修改成Dialog对话框；2.如何让用户尽快登出修改权限
    // });
    
  }


}
