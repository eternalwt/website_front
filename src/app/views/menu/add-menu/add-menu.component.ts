import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.less']
})
export class AddMenuComponent implements OnInit {

  stateList: string[] = ['启用', '不启用'];
  inUse: string = this.stateList[0];

  constructor(private dataService: DataService) { }

  // todo 修改布局

  ngOnInit() {
  }

  addMenu() {
    let inUse = this.inUse == this.stateList[0];
    // todo
    let menu = {};
    this.dataService.addMenu(menu).subscribe(res => {
      // todo dialog
    });
  }

}
