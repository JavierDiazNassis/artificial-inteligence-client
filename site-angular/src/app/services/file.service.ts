import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class FileService {

  private url: string = "";
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {


  }

  public AddFile(files: Array<File>, userId, folderName): Observable<any> {

    const formData: any = new FormData();

    formData.append("userId", userId);
    formData.append("folderName", folderName);

    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i], files[i]['name']);
    }

    return this.http.post(`${this.url}/fileupload`, formData, { headers: this.headers });
    
  }

}