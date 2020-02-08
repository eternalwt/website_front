import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.less']
})
export class AddMenuComponent implements OnInit {

  inUse: string;
  stateList: string[] = ['启用', '不启用'];

  constructor() { }

  // todo 修改布局

  ngOnInit() {
  }

}
