import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.less']
})
export class ArticleListComponent implements OnInit {

  pageSize: Number = 10;
  /**
   * 表格数据
   */
  dataList: any = [];

  // 要展示的列
  columnsToDisplay: any = ['title', 'content', 'action'];

  // todo 下面正确的用法参考：https://www.freakyjolly.com/angular-material-table-operations-using-dialog/
  // @ViewChild(MatSort) sort: MatSort;
  // @ViewChild(MatPaginator) paginator: MatPaginator;

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

}
