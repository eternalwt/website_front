import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perm-assign',
  templateUrl: './perm-assign.component.html',
  styleUrls: ['./perm-assign.component.less']
})
export class PermAssignComponent implements OnInit {

  // todo 换行的问题

  constructor() {}

  title = 'materialApp';
  checked = false;
  indeterminate = false;
  labelPosition = 'after';
  disabled = false;

  menuList = [
    {roleName:"role1", permList: [{key:"perm1", checked: true}, {key:"perm2", checked: true}, {key:"perm3", checked: true}] },  
    {roleName:"role2", permList: [{key:"perm1", checked: true}, {key:"perm2", checked: true}, {key:"perm5", checked: true}] },  
    {roleName:"role3", permList: [{key:"perm2", checked: true}, {key:"perm3", checked: true}]} ]
    ;

  ngOnInit() {
    // 1.读出所有的权限【要能分类】；要能够分级授权
    

    // 2.读出各个角色有的权限
    

    // 3.组合得到前端需要的数据

    
  }

}
