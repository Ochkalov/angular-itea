import { Injectable } from "@angular/core";
// Import Http to work with http protocol
import { Http, Response } from "@angular/http";

import { User } from "../models/user";

import "rxjs/add/operator/toPromise";

@Injectable()
export class UsersService {

  constructor(
    private http: Http
  ) {}

  getUsers(): Promise<User[]> {
    const URL = "./assets/users.json"
    return this.http.get(URL)
      .toPromise()
      .then(
        response => response.json() as User[]
      )
      .catch(
        error => this.errorHandler(error)
      )
  }

  registerUser(data: User): Promise<User> {
    const URL = "api/addUser";
    return this.http.post(URL, data, this.headers)
      .toPromise()
      .then(
        response => response.json() as User
      )
      .catch(
        error => this.errorHandler(error)
      )
  }

  private errorHandler(err: Error) {
    return console.error(err)
  }

  private headers: Headers = new Headers({ "Content-Type": "application/json" });
}
