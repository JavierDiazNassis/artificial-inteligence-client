import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/services/people.service';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  filesToUploadCheck: Array<any> = [];
  filesToUploadReport: Array<any> = [];
  userReport:any;

  constructor(private peopleService: PeopleService, private fileService: FileService) {

  }

  ngOnInit() {
  }

  async PeopleReport(dataForm) {

    let data = dataForm.value
    const NamePeople = await this.peopleService.AddPeople(data)

    if (NamePeople != null) {

      //if (this.filesToUpload.length > 0){
      const response = await this.fileService
        .AddFile(this.filesToUploadReport, NamePeople.personId, "REPORT")
      console.log(response)
      //}

    }

    // console.log(NamePeople.personId)

    //data.files = this.filesToUpload

    // if(data.files.length == 0)
    //   return

  }

  Files(event: any) {
    this.filesToUploadReport = Array.from(event.target.files);
  }

  async PeopleCheck(event: any) {
    this.filesToUploadCheck = Array.from(event.target.files);
    const response = await this.fileService.AddFile(this.filesToUploadCheck,"","");  
    this.userReport = response;
    if(!!response.isCorrect){
      document.getElementById('btn_modal').click()
    } else{
      console.log('NO Hola')
    }
  }

}
