import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { FormStateService } from '../form-state-service/form-state-service.module';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';



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


  constructor(@Inject(MAT_DIALOG_DATA)public data:any, private ref:MatDialogRef<AddNewsEditComponent>, 
  private formStateService: FormStateService,
  private formBuilder: FormBuilder,
  private http:HttpClient
  ) {
    this.nameNews=this.data.NameNews ? this.data.NameNews: ''
    this.NewsDetail=this.data.NewsDetail ? this.data.NewsDetail: ''
    this.NewsStatus=this.data.NewsStatus ? this.data.NewsStatus: ''
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
      NewsId: [''], 
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
    const newValue = currentValue === 1 ? 1 : 0;
    this.form.patchValue({
      Status: newValue
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const formData = {
        EmployeeId: 3, // กำหนดค่า EmployeeId ตามที่กำหนดในข้อมูล API
        // ส่วนอื่น ๆ ของข้อมูลที่ต้องการส่ง
      };
  
      this.http.post('https://ba-sit.uapi.app/uapi/drt-ElectronicsDocument/ED-UpdateStatusNews', formData)
        .subscribe((response) => {
          const responseData = JSON.stringify(response)
          alert(responseData)
        });
    } else {
      // ถ้าฟอร์มไม่ถูกต้อง ให้ทำเช่นนี้
      this.form.markAllAsTouched(); // ทำเครื่องหมายว่าฟอร์มถูกแตะทุกฟิลด์เพื่อแสดงข้อผิดพลาด
      alert('กรุณากรอกข้อมูลให้ครบถ้วน');
    }
  }

  onEdit() {
    const editFormData = this.form.value;
    console.log(editFormData)
  }
}
