import { Injectable } from "@angular/core";
// Import Http to work with http protocol
import { Http, Response } from "@angular/http";

import { User } from "../models/user";

import "rxjs/add/operator/toPromise";

@Injectable()
export class UsersService {

  private DOMAIN: string = "http://localhost:3000";

  constructor(
    private http: Http
  ) {}

  getUsers(): Promise<User[]> {
    const URL = `${this.DOMAIN}/api/user`;
    return this.http.get(URL)
      .toPromise()
      .then(
        response => response.json() as User[]
      )
      .catch(
        error => this.errorHandler(error)
      )
  }

  getUserById(id: number): Promise<User> {
    const URL = `${this.DOMAIN}/api/user/${id}`;
    return this.http.get(URL)
      .toPromise()
      .then(
        response => response.json() as User
      )
      .catch(
        error => this.errorHandler
      )
  }

  registerUser(data: User): Promise<any> {
    const URL = `${this.DOMAIN}/api/user`;
    return this.http.post(URL, data, this.headers)
      .toPromise()
      .then(
        response => response.json()
      )
      .catch(
        error => this.errorHandler(error)
      )
  }

  deleteUser(id: number): Promise<any> {
    const URL = `${this.DOMAIN}/api/user/${id}`;
    return this.http.delete(URL)
      .toPromise()
      .then(
        response => response.json()
      )
      .catch(
        error => this.errorHandler(error)
      )
  }

  editUser(user: User): Promise<User> {
    const URL = `${this.DOMAIN}/api/user/${user.id}`;
    return this.http.put(URL, user)
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
