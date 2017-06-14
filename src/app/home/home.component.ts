import { Component } from "@angular/core";

import { UsersService } from "../services/users.service";

import { User } from "../models/user";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent {
    // define array of navigation items:
    navItems: string[] = [
        "Home", "Catalog", "About Us"
    ];

    // define array of some strings for using with bold directive
    items: string[] = [
        "Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"
    ]

    // define new variable x with number type
    x: number = 8;

    // define users variable
    users: User[];

    constructor(
        private userService: UsersService
    ) {
        this.users = this.userService.getUsers();
    }

}
