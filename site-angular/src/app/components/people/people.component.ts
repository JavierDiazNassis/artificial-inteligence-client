import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  people:any;

  constructor(private activeRoute: ActivatedRoute, private route: Router, private peopleService: PeopleService) {
    
  }

  ngOnInit() {
    this.GetUserByPersonId();
  }


  async GetUserByPersonId() {
    this.activeRoute.params.subscribe(async (params) => {
      const personId = params.personId
      const response = await this.peopleService.GetPeopleByPersonId(personId);
      this.people = response;
      console.log(response);
    })

  }

}
