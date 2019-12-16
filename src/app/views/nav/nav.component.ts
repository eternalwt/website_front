import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {

  appTitle = 'myapp';

  // menuList: any;
  menuList: any = [{url:"/", name: "MYAPP"}, {url:"/home/about", name: "About"}, {url: "/home/contact", name: "Contact us"}];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.getMenuList(14).subscribe(res => {
      // todo 把14相关的逻辑写通（先登录，然后转到主页）
      if (res["code"] == 1 && res["data"].length > 0) {
        // todo mock
        // this.menuList = res["data"].map(item => {return {url: item.url, name: item.menuName}});
      }
    });
  }

}
