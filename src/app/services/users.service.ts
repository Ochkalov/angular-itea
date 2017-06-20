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

    addUser(user:User) {
      let usr = user;
        if (usr.id === undefined || usr.id === null){
          usr.id = this.users.length +1;
          this.users.push(usr);
        } else {
          this.editUser(usr);
        }

    }

    editUser(user: User) {
      let i:number = this.users.findIndex(item => item.id === user.id);

      if (i !== -1) {
        this.users[i] = user;
      }
    }
}
