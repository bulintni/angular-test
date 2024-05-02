import { FormStateService } from './../form-state-service/form-state-service.module';
import { AddNewsEditComponent } from './../add-news-edit/add-news-edit.component';
import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-ed-getnews',
  templateUrl: './ed-getnews.component.html',
  styleUrl: './ed-getnews.component.css',
})
export class EdGetnewsComponent {
  @Input() user: any = [];

  

  constructor(
    private _dialog: MatDialog, 
    private formStateService: FormStateService,
    ) {
  }

  ngOnInit ():void {
    console.log(this.user)
    
    
  }

  editStatus(status: number): boolean {
    // ตรวจสอบว่า userData.Status เป็น 1 หรือไม่
    if (status === 1) {
      status = 0;
      return false;
    } else {
      status = 1;
      return true;
    }
  }

  

  openViewDetail(namenews:any, detailnews:any, status:any) {
    this.formStateService.disableForm = true;
    this._dialog.open(AddNewsEditComponent,{
      width: '540px',
      height: '400px',
      data: {
        NameNews: namenews,
        NewsDetail: detailnews,
        NewsStatus: status,
        editBtn: true,
        subBtn: true
      }
    })
  }

  openEditDetail(namenews:any, detailnews:any, status:any) {
    this.formStateService.disableForm = false;
    this._dialog.open(AddNewsEditComponent,{
      width: '540px',
      height: '400px',
      data: {
        NameNews: namenews,
        NewsDetail: detailnews,
        NewsStatus: status,
        editBtn: false,
        subBtn: true
      }
    })
  }

  deleteList() {

  }
}
