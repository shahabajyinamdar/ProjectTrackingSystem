import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import { ApiServiceService } from '../../../services/app-service.service';


import {NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { catchError, pipe, throwError } from 'rxjs';


declare var $: any


@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrl: './create-project.component.css'
})
export class CreateProjectComponent {
  title = 'Government_Civil_Project';
  name:string="";
  ProjectForm ={
  ProjectName:"",
  ProjectLocation:"",
  ProjectImage:"",
  StartDate:new Date(),
  EndDate:new Date()

  };
  
  constructor(private apiservice: ApiServiceService){}

  
  submit(){
    let queryparam = {
      endpoint: 'api/createProject',
      body : {
      ProjectForm : this.ProjectForm,
      }
    };
    var input = $("#image").files
    

    debugger;
    this.apiservice.postData(queryparam).subscribe(
      (Response) =>{
        var data = Response;

    })
    



    
  }
}


