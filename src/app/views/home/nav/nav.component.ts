import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../service/data.service';
import { StorageService } from 'src/app/service/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {

  appTitle = 'Angular CMS';
  menuList: any = [];
  menuTree: any;

  constructor(
    private dataService: DataService,
    private router: Router,
    private storageService: StorageService
  ) { }

  ngOnInit() {
    // todo 判空
    let userId = Number(this.storageService.getJson("user")["id"]);
    // 获取对应权限的菜单 todo 这里不再获取了，由login传过来
    // this.dataService.getMenuList(userId).subscribe(res => {
    this.dataService.getMenuListByUserId(userId).subscribe(res => {
      if (res["code"] == 1 && res["data"].length > 0) {
        this.menuList = res["data"];
        // 
        // this.menuList = res["data"].map(item => {return {"label": item.menuName, "icon": item.icon, "link": item.url}});

        // 放入sessionStorage用来做鉴权 todo 网上给了一个更好的方法，还没试通
        // todo 又遇到和router相关的一个地方了，为了router行为正常，后端保存的是只有一部分路径。改好后鉴权的地方要同步修改
        this.storageService.setJson("menu", res["data"].map(item => {return item.url}));// todo 和login里面重复了

      }
    });

    // todo 下面的代码是给树形菜单用的，现在还没涉及到
    this.dataService.getMenuTree().subscribe(res => {
      // todo 绑定菜单树
      console.log(res["data"]);
    });
  }

  selectedItem(evt) {
    console.log(evt);
    this.router.navigateByUrl("/home/" + evt.link);// todo 把两个菜单需要保存的路径不一致的问题解决掉
  }

  appItems = [
    {
      label: 'MENU LIST',
      // imageIcon: '/assets/batman.jpg',
      faIcon: 'fab fa-accusoft',
      link: 'https://www.npmjs.com/package/ng-material-multilevel-menu',
      externalRedirect: true
    },
    {
      // label: 'Item 1',
      label: 'Item 1 (with Font awesome icon)',
      // faIcon: 'fab fa-500px',
      icon: "alarm",
      items: [
        {
          label: 'Item 1.1',
          link: '/item-1-1',
          faIcon: 'fab fa-accusoft'
        },
        {
          label: 'Item 1.2',
          faIcon: 'fab fa-accessible-icon',
          disabled: true,
          items: [
            {
              label: 'Item 1.2.1',
              link: '/item-1-2-1',
              faIcon: 'fa-allergies' // Font awesome default prefix is fas
            },
            {
              label: 'Item 1.2.2',
              faIcon: 'fas fa-ambulance',
              items: [
                {
                  label: 'Item 1.2.2.1',
                  faIcon: 'fas fa-anchor',  // Still you can specify if you want to
                  onSelected: function() {
                      console.log('Item 1.2.2.1');
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      label: 'Item 2',
      icon: 'alarm',
      items: [
        {
          label: 'Item 2.1',
          link: '/item-2-1',
          icon: 'favorite_border',
          activeIcon: 'favorite',
          disabled: true,
        },
        {
          label: 'Item 2.2',
          link: '/item-2-2',
          icon: 'favorite_border',
          activeIcon: 'favorite',
          navigationExtras: {
              queryParams: { order: 'popular', filter: 'new' },
          }
        }
      ]
    },
    {
      label: 'Item 3',
      icon: 'offline_pin',
      onSelected: function() {
          console.log('Item 3');
      }
    },
    {
      label: 'Item 4',
      link: '/item-4',
      icon: 'star_rate',
      hidden: true
    }
];

}
