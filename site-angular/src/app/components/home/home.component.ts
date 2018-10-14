import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  filesToUpload: Array<any> = [];

  constructor(private peopleService: PeopleService) { 
    
  }

  ngOnInit() {
  }

  async PeopleReport(dataForm){

    let data = dataForm.value
    const NamePeople = await this.peopleService.AddPeople(data)

    if (NamePeople != null){
      
    }

    console.log(NamePeople.personId)

    data.files = this.filesToUpload

    // if(data.files.length == 0)
    //   return
    
  }

  Files(event: any) {
    this.filesToUpload = Array.from(event.target.files);
    console.log(this.filesToUpload)
  }

}
