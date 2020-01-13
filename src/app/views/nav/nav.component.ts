import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {

  appTitle = 'myapp';

  menuList: any = [{url:"/", name: "MYAPP"}, {url:"/home/about", name: "About"}, {url: "/home/contact", name: "Contact us"}];

  constructor(
    private dataService: DataService,
    private storageService: StorageService
  ) { }

  ngOnInit() {
    // 从localstorage获取用户id
    let userId = Number(this.storageService.getItem("userId"));// todo 判空
    // 获取对应权限的菜单
    this.dataService.getMenuList(userId).subscribe(res => {
      if (res["code"] == 1 && res["data"].length > 0) {
        this.menuList = res["data"];
      }
    });
  }

}
