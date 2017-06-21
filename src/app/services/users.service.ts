import { Injectable } from "@angular/core";

import { User } from "../models/user";

@Injectable()
export class UsersService {

  private users: User[] = [
    { id: 1, firstName: "John", lastName: "Johnson", email: "jjohnson@mail.com", age: "32"},
    { id: 2, firstName: "Jack", lastName: "Jackson", email: "jjackson@mail.com", age: "25"},
    { id: 3, firstName: "Lois", lastName: "Lane", email: "llane@mail.com", age: "27"},
    { id: 4, firstName: "Kate", lastName: "King", email: "kking@mail.com", age: "30"}
  ]

  getUsers(): User[] {
    return this.users;
  }

  addUser(user: User) {
    let usr = user;
    // If user has no id then add it to list
    if (usr.id === undefined || usr.id === null) {
      usr.id = this.users.length + 1;
      // Change variable user to use adding without class constructor
      this.users.push(usr);
    } else {
      // Call method to change existing user
      this.editUser(usr);
    }
  }

  // Method which allows to edit existing user
  editUser(user: User) {
    let i: number = this.users.findIndex(item => item.id === user.id);

    if (i !== -1) {
      this.users[i] = user;
    }
  }
}
