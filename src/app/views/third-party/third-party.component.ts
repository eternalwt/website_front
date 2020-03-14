import { Component, OnInit } from '@angular/core';
import { TreeviewItem } from 'ngx-treeview';
import {FileUploader} from 'ng2-file-upload';

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

  items: TreeviewItem[];

  // todo viewer的两个问题：1.能否loading；2.能否加载流
  doc = "http://wjw.nmg.gov.cn/uploadfiles/201901/10/2019011008444528207707.doc";

  constructor() { }

  ngOnInit() {
    this.items = this.getBooks();
  }

  // -------------------------------------------------------------------------

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

  // ---------------------------------------------------------------------------

  uploader: FileUploader = new FileUploader({
    url: '/devProject/uploadClient',
    method: 'POST',
    itemAlias: 'file'
  });

  /**
   * 上传文件内容变化时执行的方法
   * @param event
   */
  selectedFileOnChanged(event: any) {
    // 这里是文件选择完成后的操作处理
    // alert('上传文件改变啦');
    console.log(event.target.value);
    console.log(event);
  }

  /**
   * 上传文件方法
   */
  uploadFile() {
    alert('执行上传文件');
    // 上传
    this.uploader.queue[0].onSuccess = function (response, status, headers) {
      // 上传文件成功
      if (status == 200) {
        // 上传文件后获取服务器返回的数据
        const tempRes = response;
        alert(response);
      } else {
        // 上传文件后获取服务器返回的数据错误
        alert('上传失败');
      }
    };
    // onSuccessItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any;
    this.uploader.queue[0].upload(); // 开始上传
    // this.uploader.queue[0].onSuccess()
    alert('上传之后');
  }

}
