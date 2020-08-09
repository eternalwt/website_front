import { Injectable } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { SimpleDialogComponent } from '../components/simple-dialog/simple-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class MessageBoxService {

  simpleDialog: MatDialogRef<SimpleDialogComponent>;

  constructor(
      private dialog: MatDialog,
      // private simpleDialog: MatDialogRef<SimpleDialogComponent>
  ) { }

  showMsg(title, msg) {
    this.simpleDialog = this.dialog.open(SimpleDialogComponent, {
      hasBackdrop: true,
      data: {
        title: title,
        msg: msg
      }
    });
  }
}
