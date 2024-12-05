import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  pname:string='';
  pemail:string='';
  pmessage:string='';
  submittedData:any='';

  constructor(private router:Router){}

  onSubmit(){
    this.submittedData={
      name:this.pname,
      email:this.pemail,
      message:this.pmessage,
    };

    //after 10 sec navigate to details component
    setTimeout(() => {
      this.router.navigate(['/det'],{
        state:{data:this.submittedData},
      });
    },10000);
  }
}

