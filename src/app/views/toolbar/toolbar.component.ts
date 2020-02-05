import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.less']
})
export class ToolbarComponent implements OnInit {

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
  }

  logoutClick() {
    alert("hello");
    this.dataService.logout();
    // todo 跳转到登录页面
  }

}
