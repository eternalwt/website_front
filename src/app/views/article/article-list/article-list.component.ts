import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.less']
})
export class ArticleListComponent implements OnInit {
  // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [10, 20, 50, 200];

  // MatPaginator Output
  pageEvent: PageEvent;

  // 表格数据
  dataList: any = [];

  // 要展示的列
  columnsToDisplay: any = ['title', 'content'];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    let pageParam = {pageNum: 1, pageSize: this.pageSize};
    let param = {condition: {}, pageParam: pageParam};
    this.dataService.listArticle(param).subscribe(res => {
      if (res["data"]["records"]) {
        this.dataList = res["data"]["records"];
      }
    });
  }

  pageOptionChange(evt) {
    debugger;
    console.log(this.pageEvent);
    alert("page change!");
  }

}
