import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-msg',
  templateUrl: './msg.component.html',
  styleUrls: ['./msg.component.less']
})
export class MsgComponent implements OnInit {

  roleList: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.listAllRole().subscribe(res => {
      if (res && res["code"] == 1) {
        this.roleList = res["data"];
        // todo 1.把用户加载进来；2.select all做好；3.发送消息做好
      }
    });
  }

  saveUser() {
    
  }

}
