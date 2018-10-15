import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { config } from '../app.config';

@Injectable()
export class FileService {

  private url: string = config.url;
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {

  }

  public AddFile(files: Array<File>, personId): Promise<any> {

    const formData: any = new FormData();

    formData.append("personId", personId);

    files.forEach((file,i) => {
      formData.append("files", file, file.name);
    })

    return this.http.post(`${this.url}/user/image`, formData, { headers: this.headers }).toPromise();
    
  }

}