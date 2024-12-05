import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username:string='';
  password:string='';
  errorMessage:string='';

  //static login credintals
  validUsername='admin';
  validPassword='password';

  //DI router Di using constrictur
  constructor(private router:Router){}

  login(){
    if(this.username===this.validUsername && this.password===this.validPassword){
      this.router.navigate(['/']);
    }else{
      this.errorMessage='inavalid credintals ,plese try again.'
    }
  }
}
