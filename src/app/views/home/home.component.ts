import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  users: Object;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // this.data.getUsers().subscribe(data => {
    //     this.users = data;
    //     console.log(this.users);
    //   }
    // );
  }

  getMenu() {
    this.dataService.getMenuList().subscribe(data => {
      
    });
  }

}
