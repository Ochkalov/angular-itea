import { Component } from "@angular/core";
import { Animations } from "../common/animations.common";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.styl"],
  animations: [Animations.FLY_IN_OUT, Animations.USER_STATE]
})
export class HomeComponent {

}


/*
import { Component, OnInit } from "@angular/core";
// Import FormBuilder and FormGroup modules for using data-driven forms
// Import Validators class for validation
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
// imported animations from common animation module
import { Animations } from "../common/animations.common";

import { UsersService } from "../services/users.service";

import { User } from "../models/user";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.styl"],
  animations: [Animations.FLY_IN_OUT, Animations.USER_STATE]
})
export class HomeComponent implements OnInit {
  // define variable to detect when form submitted
  isFormSubmitted: boolean = false;
  // define users variable
  users: User[];
  user: User;
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

  addNewUser() {
    this.selectedUser = new User();
  }

  // Method to clean validation on fields
  clearControlValidation(name: string) {
    this.userForm.controls[name].markAsPending();
    this.userForm.controls[name].markAsUntouched();
  }

  onMouseEnter(user: User) {
    this.user = user;
    this.user.state = "active";
  }

  onMouseLeave(user: User) {
    this.user = user;
    this.user.state = "inactive";
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
    // Update controls value and validity
    this.userForm.controls["firstName"].updateValueAndValidity();
    this.userForm.controls["lastName"].updateValueAndValidity();
    this.userForm.controls["email"].updateValueAndValidity();
    // Mark controls as touched to see error messages
    this.userForm.controls["firstName"].markAsTouched();
    this.userForm.controls["lastName"].markAsTouched();
    this.userForm.controls["email"].markAsTouched();

    if (this.userForm.valid) {
      if(this.selectedUser.id === null) {
        this.userForm.controls["id"].setValue(this.users.length);
        this.users.push(form.value);
      }
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
        data => {
          this.users = data;
          this.users.forEach(user => user.state = "inactive");
        }
      )
  }

}
*/
