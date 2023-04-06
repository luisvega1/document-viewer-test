import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class FileServiceService {

  private dataUrl = "../../api/data.json"

  constructor(private http: HttpClient) { }

  getFileData(): Observable<any> {
    return this.http.get(this.dataUrl)
  }
}
