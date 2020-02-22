import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {

  appTitle = 'Angular CMS';
  menuList: any = [{url:"/", name: "MYAPP"}, {url:"/home/about", name: "About"}, {url: "/home/contact", name: "Contact us"}];
  menuTree: any;

  constructor(
    private dataService: DataService,
    private storageService: StorageService
  ) { }

  ngOnInit() {
    // todo 判空
    let userId = Number(this.storageService.getJson("user")["id"]);
    // 获取对应权限的菜单
    this.dataService.getMenuList(userId).subscribe(res => {
      if (res["code"] == 1 && res["data"].length > 0) {
        this.menuList = res["data"];

        // 放入sessionStorage用来做鉴权 todo 思考一下有没有更好的方式
        // todo 又遇到和router相关的一个地方了，为了router行为正常，后端保存的是只有一部分路径。改好后鉴权的地方要同步修改
        sessionStorage.setItem("menu", res["data"].map(item => {return item.url}));
      }
    });

    this.dataService.getMenuTree().subscribe(res => {
      // todo 绑定菜单树
    });
  }

}
