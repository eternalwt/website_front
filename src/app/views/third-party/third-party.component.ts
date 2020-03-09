import { Component, OnInit } from '@angular/core';
import { TreeviewItem } from 'ngx-treeview';

@Component({
  selector: 'app-third-party',
  templateUrl: './third-party.component.html',
  styleUrls: ['./third-party.component.less']
})
export class ThirdPartyComponent implements OnInit {

  config = {
    hasAllCheckBox: true,
    hasFilter: false,
    hasCollapseExpand: false,
    decoupleChildFromParent: false,
    maxHeight: 500
  };

  itCategory;

  vegetableCategory = new TreeviewItem({
    text: 'Vegetable', value: 2, children: [
      { text: 'Salad', value: 21 },
      { text: 'Potato', value: 22 }
    ]
  });

  items: TreeviewItem[];

  constructor() { }

  ngOnInit() {
    this.items = this.getBooks();
  }

  onSelectedChange(evt) {

  }

  onFilterChange(evt) {

  }

  getBooks(): TreeviewItem[] {
    const childrenCategory = new TreeviewItem({
      text: 'Children', value: 1, collapsed: true, children: [
        { text: 'Baby 3-5', value: 11 },
        { text: 'Baby 6-8', value: 12 },
        { text: 'Baby 9-12', value: 13 }
      ]
    });
    const itCategory = new TreeviewItem({
      text: 'IT', value: 9, children: [
        {
          text: 'Programming', value: 91, children: [{
            text: 'Frontend', value: 911, children: [
              { text: 'Angular 1', value: 9111 },
              { text: 'Angular 2', value: 9112 },
              { text: 'ReactJS', value: 9113, disabled: true }
            ]
          }, {
            text: 'Backend', value: 912, children: [
              { text: 'C#', value: 9121 },
              { text: 'Java', value: 9122 },
              { text: 'Python', value: 9123, checked: false, disabled: true }
            ]
          }]
        },
        {
          text: 'Networking', value: 92, children: [
            { text: 'Internet', value: 921 },
            { text: 'Security', value: 922 }
          ]
        }
      ]
    });
    const teenCategory = new TreeviewItem({
      text: 'Teen', value: 2, collapsed: true, disabled: true, children: [
        { text: 'Adventure', value: 21 },
        { text: 'Science', value: 22 }
      ]
    });
    const othersCategory = new TreeviewItem({ text: 'Others', value: 3, checked: false, disabled: true });
    
    return [childrenCategory, itCategory, teenCategory, othersCategory];
  }

}
