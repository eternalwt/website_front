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
        text: '折线图'
      },
      legend: {
        // type: 'plain',
        type: 'scroll',
        data: [],
        top: '0',
        left: 'center'
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
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18']
      },
      yAxis: {
        type: 'value',
        series: []
      },
      series: []
    };

    let value = [[], []];
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 17; j++) {
        value[i].push((i + Math.random()).toFixed(2));
      }
    }

    for (let i = 0; i < 2; i++) {
        this.options.legend.data.push(i.toString());
        this.options.series.push({name: i.toString(), type:"line", smooth: true, data: value[i]});
    }
  }

}
