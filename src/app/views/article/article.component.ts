import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms'
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular';
import { DataService } from 'src/app/service/data.service';
import { StorageService } from 'src/app/service/storage.service';
// import * as DocumentEditor from '@ckeditor/ckeditor5-angular';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.less']
})
export class ArticleComponent implements OnInit {

  public Editor = ClassicEditor;//ckeditor
  config = {};//ckeditor配置

  title: string = "";//标题
  content: string = '';//正文
  submitted = false;
  success = false;

  messageForm: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private storageService: StorageService
  ) { }

  ngOnInit() {
    // this.messageForm = this.formBuilder.group({
    //   title: ['', Validators.required], // 标题
    //   content: ['', Validators.required] // 正文
    // });
  }

  onReady(editor) {
    // editor.ui.getEditableElement().parentElement.insertBefore(
    //   editor.ui.view.toolbar.element,
    //   editor.ui.getEditableElement()
    // );
  }

  onChange({editor}: ChangeEvent) {
    // const data = editor.getData();
    // console.log(data);
    // this.content = data;
  }

  onSubmit() {
    this.submitted = true;

    // if (this.messageForm.invalid) {
    //     return;
    // }

    // this.dataService.addArticle(this.messageForm.value).subscribe(res => {
    let article = {"title": this.title, "content": this.content, creatorId: this.storageService.getItem("userId")};
    this.dataService.addArticle(article).subscribe(res => {
      alert("添加成功");// todo 改成dialog
      // todo 错误处理：用户名密码错误、显示验证码等
    
    });

    // todo 把使用formBuilder的写法写通

    this.success = true;
  }

}
