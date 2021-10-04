import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { MatSort } from '@angular/material';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.less']
})
export class UserListComponent implements OnInit {

  pageSize = 10;

  /**
   * 表格数据
   */
  dataList: any = [];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {

    let pageParam = {pageNum: 1, pageSize: this.pageSize};
    this.dataService.listUser(pageParam).subscribe(res => {
      if (res["data"]["records"]) {
        this.dataList = res["data"]["records"];
      }
    });
  }

}
