import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddNewsEditComponent } from './add-news-edit/add-news-edit.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormStateService } from './form-state-service/form-state-service.module';
import { MasterServiceService } from './master-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'angular-test';
  public getData:any;
  editForm=false

  constructor(
    private _dialog: MatDialog, 
    private http:HttpClient,
    private formStateService: FormStateService,
    private masterServiceService: MasterServiceService,
  ) {

  }

  ngOnInit(): void {
    this.fetchDetails();
  }

  public async fetchDetails() {
    // await this.http.get('https://ba-sit.uapi.app/uapi/drt-ElectronicsDocument/ED-GetNews').subscribe((res:any)=> {
    //   this.getData = res && res.data|| [];
    // })
    this.masterServiceService.GetEmployee().subscribe((res:any)=> {
      console.log("GetEmployee", res)
      this.getData = res && res.data|| [];
    })
  }

  openAddEditNews() {
    this.formStateService.disableForm = false;
    let dialogRef = this._dialog.open(AddNewsEditComponent,{
      width: '540px',
      height: '400px',
      data: {
        NameNews: '',
        NewsDetail: '',
        NewsStatus: 0,
        editBtn: true,
        subBtn: false
      }
    })
    dialogRef.afterClosed().subscribe(e => {
      this.fetchDetails();
    })
  }

  

}
