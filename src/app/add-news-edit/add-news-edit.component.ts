import { MasterServiceService } from './../master-service.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { FormStateService } from '../form-state-service/form-state-service.module';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';



@Component({
  selector: 'app-add-news-edit',
  templateUrl: './add-news-edit.component.html',
  styleUrl: './add-news-edit.component.css'
})
export class AddNewsEditComponent implements OnInit {

  form!: FormGroup;
  disableForm!: boolean;
  editBtn!: boolean;
  submitBtn!: boolean;
  userData:any = [];
  nameNews:any;
  NewsDetail:any;
  NewsStatus:any;
  isChecked: boolean = false;


  constructor(@Inject(MAT_DIALOG_DATA)public data:any, private ref:MatDialogRef<AddNewsEditComponent>, 
  private formStateService: FormStateService,
  private formBuilder: FormBuilder,
  private masterServiceService: MasterServiceService,
  // private snackBar: MatSnackBar
  ) {
    this.nameNews=this.data.NameNews ? this.data.NameNews: ''
    this.NewsDetail=this.data.NewsDetail ? this.data.NewsDetail: ''
    this.NewsStatus=this.data.NewsStatus == 1 ? true:false
    this.createForm();
  }



  ngOnInit():void {
    this.disableForm = this.formStateService.disableForm; // รับค่า disableForm จาก Service
    this.editBtn = this.data.editBtn
    this.submitBtn = this.data.subBtn;
    if (this.disableForm) {
      this.form.disable(); // ปิดการแก้ไขฟอร์ม
    }
    
  }

  createForm() {
    this.form = this.formBuilder.group({
      NewsId: [0], 
      NameNews: [this.nameNews, Validators.required], // ใส่ Validators.required เพื่อตรวจสอบว่ามีข้อมูลหรือไม่
      Detail: [this.NewsDetail, Validators.required], // ใส่ Validators.required เพื่อตรวจสอบว่ามีข้อมูลหรือไม่
      Status: [this.NewsStatus], 
      UpdatedDate: [new Date()], 
      ButtonView: [1], 
      ButtonEdit: [1], 
      ButtonDelete: [1] 
    });
    console.log(this.form)
  }


  closeDialog() {
    this.form.reset()
    this.ref.close()
  }

  setStatus() {
    const currentValue = this.form.value.Status;
    // const newValue = currentValue === 1 ? 0 : 1;
    console.log(currentValue)
    // this.form.patchValue({
    //   Status: newValue
    // });
    console.log('setStatus', this.form.valid)
  }


  
  onSubmit() {
    console.log("EmployeeId", typeof this.form.value.NewsId)
    console.log("Status", typeof this.form.value.Status)

    if (this.form.valid) {
      const formData = {
        EmployeeId: 3, 
        NewsId: this.form.value.NewsId,
        Status: this.form.value.Status === true? 1:0
      }
      this.masterServiceService.AddNewsCol(formData).subscribe((res:any)=> {
        console.log("AddNewsCol" , res)
        // if(res.successful==true){
        //   let snackBarRef = this.snackBar.open("successful", "", {"duration": 1000000000});
        //   snackBarRef.afterDismissed().subscribe(() => {
        //     window.location.reload()
        //   });
        // }else {
        //   let snackBarRef = this.snackBar.open("unsuccessful");
        // }
      })
      // this.http.post('https://ba-sit.uapi.app/uapi/drt-ElectronicsDocument/ED-UpdateStatusNews', formData)
      //   .subscribe((response) => {
      //     const responseData = JSON.stringify(response)
      //     alert(responseData)
      //     this.form.reset()
      //     this.ref.close()
      //   });
    } else {
      alert('กรุณากรอกข้อมูลให้ครบถ้วน');
    }
  }

  onEdit() {
    const editFormData = this.form.value;
    console.log(editFormData)
  }
}
