import { Component, OnInit } from "@angular/core";
// Import FormBuilder and FormGroup modules for using data-driven forms
// Import Validators class for validation
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { UsersService } from "../services/users.service";

import { User } from "../models/user";
import "rxjs/add/operator/toPromise";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
// import "rxjs/add/operator/catch";
// import "rxjs/add/operator/throw";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {


  // define variable to detect when form submitted
  isFormSubmitted: boolean = false;
  // define users variable
  users: User[];
  // define selectedUser var to edit existing user
  selectedUser: User;
  // define userForm variable as FormGroup
  userForm: FormGroup;
  // define RegExp variable to use in validators
  REG_EXP: any = /^[\W]*([\w+\-.%]+@[\w\-.]+\.[A-Za-z]{2,4}[\W]*(;|,){1}[\W]*)*([\w+\-.%]+@[\w\-.]+\.[A-Za-z]{2,4})[\W]*$/;

  constructor(
    // Add method which using FormBuilder class to build data-driven form
    private formBuilder: FormBuilder,
    private userService: UsersService
  ) {}

  // Method to clean validation on fields
  clearControlValidation(name: string) {
    this.userForm.controls[name].markAsTouched();
  }

  // Method to select existing user form list
  onSelect(usr: User) {
    this.selectedUser = usr;
    this.userForm.controls["id"].setValue(this.selectedUser.id);
    this.userForm.controls["firstName"].setValue(this.selectedUser.firstName);
    this.userForm.controls["lastName"].setValue(this.selectedUser.lastName);
    this.userForm.controls["email"].setValue(this.selectedUser.email);
    this.userForm.controls["age"].setValue(this.selectedUser.age);
  }

  // Method which will be called on form submit
  onSubmit(e: Event, form: FormGroup) {
    this.isFormSubmitted = true;
    // e.preventDefault() to disable of page reloading after submit
    e.preventDefault();

    // Mark controls as untouched to show error messages
    this.userForm.controls["firstName"].markAsUntouched();
    this.userForm.controls["lastName"].markAsUntouched();
    this.userForm.controls["email"].markAsUntouched();

    if (this.userForm.valid) {
      // Added variable user as form value to push new user
      let user: User = form.value;
      // this.userService.addUser(user);
      this.userForm.reset();
      this.isFormSubmitted = false;
    }
  }

  // Added building of data-driven form in OnInit method
  ngOnInit() {
    this.userForm = this.formBuilder.group({
      id: [this.selectedUser ? this.selectedUser.id : null],
      firstName: [this.selectedUser ? this.selectedUser.firstName : null, Validators.required],
      lastName: [this.selectedUser ? this.selectedUser.lastName : null, Validators.required],
      email: [this.selectedUser ? this.selectedUser.email : null, [Validators.required, Validators.pattern(this.REG_EXP)]],
      age: [this.selectedUser ? this.selectedUser.age : null]
    });

    this.userService.getUsers()
      .then(
        data => this.users = data
      )
     /* .subscribe(
        data => this.users = data,
        err => {
          this.error = err;
          console.log(this.error)
        }
      )*/
  }
}
