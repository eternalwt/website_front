import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  options: any;

  constructor() { }

  ngOnInit() {
    this.options = {
      title: {
        text: '身高'
      },
      legend: {
        type: 'plain'
      },
      tooltip: {
        trigger: 'axis'
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      // xAxis: {
      //   type: 'category',
      //   boundaryGap: false,
      //   data: ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18']
      // },
      // yAxis: {
      //   type: 'value',
      //   min: 70
      // }
      
    };
  }

}
