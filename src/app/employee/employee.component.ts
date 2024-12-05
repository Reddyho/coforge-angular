import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

  employeeId:number=101;
  employeeName:string="Honey";
  employeeAge:number=21;

  title="Employee Details-Data Binding using various Directives"

  isManager:boolean=true;

  skills:string[] =['javaScript','Angular','TypeScript'];

  //enum
  Position:PositionType=PositionType.SeniorDeveloper

  address:{street:string,city:string,poatalCode:number}={
    street:'123 main st',
    city:'new york',
    poatalCode:10001
  };
   
  //Any data type
  extraInfo:any ='Additional employee Info';

  //Event binging handling method
  message:string='';

  //two way data binding
  employeePosition:string='Software Engineer';

  //event binding method
  hello():void{
    this.message="hello from event binding in angular by -"+this.employeeName;

  }

  clear():void{
    this.message='';
  }

  toogleManagerStatus():void{
    this.isManager=!this.isManager;
  }

  //property binding
  username:string='teja';
  info:string="property binding - one way";

  updateUserName(){
    this.username='chandu';
  }

  convertToDate(){
    const date=new Date();
    return date.toLocaleDateString();
  }

  add():number{
    return 10+200;
  }
}

  //Enum for position type
  enum PositionType{

    juniourDeveloper,
    SeniorDeveloper,
    TeamLead
  }
  

