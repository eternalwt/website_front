import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.less']
})
export class AddMenuComponent implements OnInit {

  stateList: string[] = ['启用', '不启用'];
  inUse: string = this.stateList[0];

  constructor() { }

  // todo 修改布局

  ngOnInit() {
  }

}
