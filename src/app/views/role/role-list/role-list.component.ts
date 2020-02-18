import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.less']
})
export class RoleListComponent implements OnInit {

  pageSize = 10;
  // 表格数据
  dataList: any = [];

  // 要展示的列
  columnsToDisplay: any = ['roleName', 'createTime'];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    let pageParam = {pageNum: 1, pageSize: this.pageSize};
    this.dataService.listRole(pageParam).subscribe(res => {
      if (res["data"]["records"]) {
        this.dataList = res["data"]["records"];
      }
    });
  }

}
