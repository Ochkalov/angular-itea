import { Injectable } from "@angular/core";

import { User } from "../models/user";

@Injectable()
export class UsersService {

    private users: User[] = [
        { firstName: "John", lastName: "Johnson", email: "jjohnson@mail.com", age: "32"},
        { firstName: "Jack", lastName: "Jackson", email: "jjackson@mail.com", age: "25"},
        { firstName: "Lois", lastName: "Lane", email: "llane@mail.com", age: "27"},
        { firstName: "Kate", lastName: "King", email: "kking@mail.com", age: "30"}
    ]

    getUsers(): User[] {
        return this.users;
    }

    addUser(firstName: string, lastName: string, email: string, age: string) {
        this.users.push(new User(firstName, lastName, email, age));
    }
}