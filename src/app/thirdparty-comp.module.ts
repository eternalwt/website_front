import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeviewModule } from 'ngx-treeview';
import { NgxEchartsModule } from 'ngx-echarts';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TreeviewModule.forRoot(),
    NgxEchartsModule
  ],
  exports: [
    // MatButtonModule,
    // MatCheckboxModule
    NgxEchartsModule,
    TreeviewModule
  ]
})
export class ThirdpartyCompModule { }
