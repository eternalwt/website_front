import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeviewModule } from 'ngx-treeview';
// import { NgxEchartsModule } from 'ngx-echarts';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { TabModule } from 'angular-tabs-component';
import { FileUploadModule } from 'ng2-file-upload';
import {BreadcrumbModule} from 'xng-breadcrumb';
import { NgxMultiModalModule } from 'ngx-multi-modal';
import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TreeviewModule.forRoot(),
    // NgxEchartsModule,
    PdfViewerModule,
    NgxDocViewerModule,
    TabModule,
    FileUploadModule,
    BreadcrumbModule,
    NgxMultiModalModule,
    NgMaterialMultilevelMenuModule
  ],
  exports: [
    // NgxEchartsModule,
    TreeviewModule,
    PdfViewerModule,
    NgxDocViewerModule,
    TabModule,
    FileUploadModule,
    BreadcrumbModule,
    NgxMultiModalModule,
    NgMaterialMultilevelMenuModule
  ]
})
export class ThirdpartyCompModule { }
