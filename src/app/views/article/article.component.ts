import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular';
// import * as DocumentEditor from '@ckeditor/ckeditor5-angular';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.less']
})
export class ArticleComponent implements OnInit {

  public Editor = ClassicEditor;

  config = {};

  constructor() { }

  ngOnInit() {
  }

  onReady(editor) {
    // editor.ui.getEditableElement().parentElement.insertBefore(
    //   editor.ui.view.toolbar.element,
    //   editor.ui.getEditableElement()
    // );
  }

  content = '';
  onChange({editor}: ChangeEvent) {
    // const data = editor.getData();
    // console.log(data);
    // this.content = data;
  }

}
