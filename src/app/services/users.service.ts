import { Injectable } from "@angular/core";

import { Http, Response } from "@angular/http";

import { User } from "../models/user";

import "rxjs/add/operator/toPromise";
// import {Observable} from "rxjs/Observable";

@Injectable()
export class UsersService {

  constructor(
    private http: Http
  ){}

  getUsers(): Promise<User[]> {
      const URL = "./assets/users.json";
      return this.http.get(URL)
        .toPromise()
        .then(
              response => response.json() as User[]
        )
        .catch(
          error => this.errorHandler(error)
        )
  }


  private  errorHandler(err: any) {
      return console.log(err);
  }

  addUser(data:User):Promise<User>{
   const URL = "api/addUser";
   return this.http.post(URL,data,this.headers)
     .toPromise()
     .then(
       response => response.json() as User
     )
     .catch(
       error => this.errorHandler(error)
     )
  }
       private  headers:Headers = new Headers({"Content-Type":"aplication-json"})

  registerUser(reg:User):Promise<User> {

  }



  // addUser(user: User) {
  //   let usr = user;
  //   // If user has no id then add it to list
  //   if (usr.id === undefined || usr.id === null) {
  //     usr.id = this.users.length + 1;
  //     // Change variable user to use adding without class constructor
  //     this.users.push(usr);
  //   } else {
  //     // Call method to change existing user
  //     this.editUser(usr);
  //   }
  // }
  //
  // // Method which allows to edit existing user
  // editUser(user: User) {
  //   let i: number = this.users.findIndex(item => item.id === user.id);
  //
  //   if (i !== -1) {
  //     this.users[i] = user;
  //   }
  // }
}
