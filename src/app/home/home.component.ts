import { Component, OnInit } from "@angular/core";
// Import FormBuilder and FormGroup modules for using data-driven forms
// Import Validators class for validation
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
// Imported trigger, state, style, animate, transition to work with angular animations
import { trigger, state, style, animate, transition } from "@angular/animations";

import { UsersService } from "../services/users.service";

import { User } from "../models/user";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  animations: [
    trigger("userState", [
      state("inactive", style({
        backgroundColor: "#eee",
        transform: "scale(1)",
        width:"*"
      })),
      state("active", style({
        backgroundColor: "#cfd8dc",
        transform: "scale(1.1)"
      })),
      transition("inactive => inactive", animate("300ms ease-in")),
      transition("active => active", animate("300ms ease-out"))
    ])
  ]
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

  addNewUser(){
    this.selectedUser = new User;
  }

  // Method to clean validation on fields
  clearControlValidation(name: string) {
    this.userForm.controls[name].markAsTouched();
  }

  onMouseEnter(user:User) {
    this.user = user;
    this.user.state = "active"
  }
  onMouseLeave(user:User) {
    this.user = user;
    this.user.state = "inactive"
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
      if (this.userForm.controls["id"].value === null) {
        this.userForm.controls["id"].setValue(this.users.length) ;
        this.users.push(form.value);
      }

      // Added variable user as form value to push new user
      let user: User = form.value;
      // this.userService.addUser(user);
      this.userForm.reset();
      this.isFormSubmitted = false;
    }
  }

  resetForm() {
    this.userForm.reset();
  }

  toggleState() {
    this.selectedUser.state === "inactive" ? this.selectedUser.state = "active" : this.selectedUser.state = "inactive";
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
