import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterServiceService {
  

  constructor(private http: HttpClient) { 

  }

  GetEmployee():Observable<any> {
    return this.http.get<any>('https://ba-sit.uapi.app/uapi/drt-ElectronicsDocument/ED-GetNews')
  }

  AddNewsCol(data:any):Observable<any> {
    console.log(data)
    return this.http.post<any>('https://ba-sit.uapi.app/uapi/drt-ElectronicsDocument/ED-UpdateStatusNews',
      {
        EmployeeId: data.EmployeeId,
        NewsId: data.NewsId,
        Status: data.Status
      }
    ).pipe(
      map((res:any)=> {
        console.log('service AddNewsCol',res)
        return res
      }),
      catchError((er:any)=> {
        console.log(er)
        return er
      })
    )
  }
}
