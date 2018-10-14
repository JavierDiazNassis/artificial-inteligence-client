import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  peopleList: Array<any> = [];

  constructor(private peopleService: PeopleService) { 
    
  }

  ngOnInit() {
    this.GetPeoples();
  }

  async GetPeoples(){
    const response = await this.peopleService.GetPeoples();
    this.peopleList = response;
    console.log(this.peopleList)
  }

}
