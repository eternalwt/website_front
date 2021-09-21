import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  lineChartOptions: any;// 折线图数据
  pieChartOptions: any; // 饼图数据

  constructor() { }

  ngOnInit() {
    this.lineChartOptions = {
      title: {
        text: '折线图'
      },
      legend: {
        icon: 'roundRect',
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

    let value: any[] = [[], []];
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 17; j++) {
        value[i].push((i + Math.random()).toFixed(2));
      }
    }
    value[1][3] = null;
    value[1][4] = null;
    value[1][5] = null;

    for (let i = 0; i < 2; i++) {
        this.lineChartOptions.legend.data.push(i.toString());
        this.lineChartOptions.series.push({name: i.toString(), type:"line", smooth: true, data: value[i]});
    }


    // 饼图
    this.pieChartOptions = {
      series : [
          {
              name: '访问来源',
              type: 'pie',    // 设置图表类型为饼图
              radius: '55%',  // 饼图的半径，外半径为可视区尺寸（容器高宽中较小一项）的 55% 长度。
              data:[          // 数据数组，name 为数据项名称，value 为数据项值
                  {value:235, name:'视频广告'},
                  {value:274, name:'联盟广告'},
                  {value:310, name:'邮件营销'},
                  {value:335, name:'直接访问'},
                  {value:400, name:'搜索引擎'}
              ]
          }
      ]
    };



  }

}
