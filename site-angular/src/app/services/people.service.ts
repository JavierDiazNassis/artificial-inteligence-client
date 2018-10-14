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
    return this.httpClient.post(this.url, data, {}).toPromise();
  }

  AddFacetoPeople(data):Promise<any>{
    return this.httpClient.post(this.url, data, {}).toPromise();
  }
  
  GetPeoples():Promise<any>{
    return this.httpClient.get(`${this.url}/users`).toPromise();
  }

  GetPeopleByPersonId(personId):Promise<any>{
    personId = '3fd9092a-eaaf-4e5e-9cf2-435aca87fdfa'
    return this.httpClient.get(`${this.url}/user?personId=${personId}`).toPromise();
  }

}