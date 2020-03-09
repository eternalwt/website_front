import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeviewModule } from 'ngx-treeview';
import { NgxEchartsModule } from 'ngx-echarts';
import { PdfViewerModule } from 'ng2-pdf-viewer';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TreeviewModule.forRoot(),
    NgxEchartsModule,
    PdfViewerModule
  ],
  exports: [
    // MatButtonModule,
    // MatCheckboxModule
    NgxEchartsModule,
    TreeviewModule,
    PdfViewerModule
  ]
})
export class ThirdpartyCompModule { }
