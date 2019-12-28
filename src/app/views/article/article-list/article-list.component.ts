import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.less']
})
export class ArticleListComponent implements OnInit {

  // 表格数据
  myDataArray: any = [];

  // 要展示的列
  columnsToDisplay: any = ['title', 'content'];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    let param = {pageNum: 1, pageSize: 5};
    this.dataService.listArticle(param).subscribe(res => {
      debugger;
      if (res["data"]["records"]) {
        // todo 绑定table
        this.myDataArray = res["data"]["records"];
        console.log(this.myDataArray);
      }
    });
  }

}
