import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../app.config';

@Injectable({providedIn: 'root'})
export class PeopleService {

  url: string;

  constructor(private httpClient: HttpClient) { 
    this.url = config.url;
  }

  AddPeople(data):Promise<any>{
    return this.httpClient.post(`${this.url}/user`, data, {}).toPromise();
  }

  AddFacetoPeople(data):Promise<any>{
    return this.httpClient.post(this.url, data, {}).toPromise();
  }
  
  GetPeoples():Promise<any>{
    return this.httpClient.get(`${this.url}/users`).toPromise();
  }

  GetPeopleByPersonId(personId):Promise<any>{
    return this.httpClient.get(`${this.url}/user?personId=${personId}`).toPromise();
  }

}