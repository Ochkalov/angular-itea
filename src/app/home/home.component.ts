import { Component } from "@angular/core";
// Import NgForm for using Form Object in template-drive forms
import { NgForm } from "@angular/forms";

import { UsersService } from "../services/users.service";

import { User } from "../models/user";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent {
    // define users variable
    users: User[];

    constructor(
        private userService: UsersService
    ) {
        this.users = this.userService.getUsers();
    }

    // Method which will be called on form submit
    onSubmit(e: Event, form: NgForm) {
        // e.preventDefault() to disable of page reloading after submit
        e.preventDefault();
        // Added new user into users collection of user.service
        this.userService.addUser(form.controls["firstName"].value, form.controls["lastName"].value, form.controls["email"].value, form.controls["age"].value);
    }

}
