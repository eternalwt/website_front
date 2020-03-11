import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatCardModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatRadioModule,
    MatExpansionModule,
    MatTreeModule,
    MatPaginatorModule,
    MatTabsModule
} from '@angular/material';
import { SimpleDialogComponent } from './components/simple-dialog/simple-dialog.component';

@NgModule({
  declarations: [
    SimpleDialogComponent
  ],
  imports: [
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatDialogModule,
    MatIconModule,
    MatRadioModule,
    MatExpansionModule,
    MatTreeModule,
    MatPaginatorModule,
    MatTabsModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatDialogModule,
    MatIconModule,
    MatRadioModule,
    MatExpansionModule,
    MatTreeModule,
    MatPaginatorModule,
    MatTabsModule
  ],
  entryComponents: [
    SimpleDialogComponent,
  ]
})
export class MaterialCompModule {}