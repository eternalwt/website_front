import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-simple-dialog',
  templateUrl: './simple-dialog.component.html',
  styleUrls: ['./simple-dialog.component.less']
})
export class SimpleDialogComponent implements OnInit {

  title: string = "No Permission";
  msg: string = "No enough permission to access this page.";

  constructor(
    public dialogRef: MatDialogRef<SimpleDialogComponent>) { }

  ngOnInit() {
  }
  
  close(): void {
    this.dialogRef.close();
    // todo 回到上一路由
  }

}
