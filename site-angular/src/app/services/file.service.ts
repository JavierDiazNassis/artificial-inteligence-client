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

  public AddFile(files: Array<File>, personId, type: string): Promise<any> {

    const formData: any = new FormData();

    if (type == "REPORT") {

      formData.append("personId", personId);
      files.forEach((file, i) => {
        formData.append("files", file, file.name);
      })

    } else {

      files.forEach((file, i) => {
        formData.append("file", file, file.name);
      })

    }

    if (type == "REPORT")
      return this.http.post
        (`${this.url}/user/image`, formData, { headers: this.headers }).toPromise();

    return this.http.post
      (`${this.url}/user/findById`, formData, { headers: this.headers }).toPromise();

  }

}