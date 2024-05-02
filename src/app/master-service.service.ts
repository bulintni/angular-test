import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterServiceService {
  

  constructor(private http: HttpClient) { 

  }

  GetEmployee():Observable<any> {
    return this.http.get<any>('https://ba-sit.uapi.app/uapi/drt-ElectronicsDocument/ED-GetNews')
  }
}
