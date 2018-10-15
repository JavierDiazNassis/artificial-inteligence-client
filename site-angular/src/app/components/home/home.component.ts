import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/services/people.service';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  filesToUpload: Array<any> = [];

  constructor(private peopleService: PeopleService, private fileService: FileService) { 
    
  }

  ngOnInit() {
  }

  async PeopleReport(dataForm){

    let data = dataForm.value
    const NamePeople = await this.peopleService.AddPeople(data)

    if (NamePeople != null){
      
      //if (this.filesToUpload.length > 0){
        const response = await this.fileService.AddFile(this.filesToUpload,NamePeople.personId)
        console.log(response)
      //}

    }

   // console.log(NamePeople.personId)

    //data.files = this.filesToUpload

    // if(data.files.length == 0)
    //   return
    
  }

  Files(event: any) {
    this.filesToUpload = Array.from(event.target.files);
  }

}
