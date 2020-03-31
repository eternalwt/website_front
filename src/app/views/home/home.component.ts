import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  users: Object;

  constructor(private dataService: DataService,
              private router: Router) { }

  ngOnInit() {
    this.router.navigateByUrl("/home/main");
  }

}
