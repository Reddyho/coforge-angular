import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private url='https://reqres.in/api/users';

  constructor(private htppClient:HttpClient) { }

  helloService(){
    return "Hello from Angular Service";
  }

  getUser(){
    return this.htppClient.get(this.url);
  }
}
