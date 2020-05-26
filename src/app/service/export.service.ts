import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExportService {

  constructor() { }

  /**
   * 将请求返回的数据转化为文件并下载下来
   * @param fileBits 文件内容
   * @param fileName 文件名称
   * @param format 格式，使用枚举，例如：application/x-msdownload、application/vnd.ms-excel、application/vnd.ms-excel、application/zip
   */
  downloadExcel(fileBits, fileName, format) {
    /* 使用 a链接下载,自己取文件名 */
    let elelink = document.createElement('a');
    elelink.download = fileName;
    elelink.style.display = 'none';
    let file = new File([fileBits], null, { type: format });
    elelink.href = URL.createObjectURL(file)  //创建一个指向参数对象的URL
    document.body.appendChild(elelink)  //将创建的a标签设置为不可见,通过a标签链接进行下载,之后将a标签移除
    elelink.click()
    document.body.removeChild(elelink)
    URL.revokeObjectURL(URL.createObjectURL(file));  //不再需要已经创建的对象URL时,需要释放这个地址
  }

}
