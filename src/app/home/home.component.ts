import { Component, OnInit } from "@angular/core";
// Import NgForm for using Form Object in template-drive forms

import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { UsersService } from "../services/users.service";

import { User } from "../models/user";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
    // define users variable
    isFormSubmitted: boolean = false;
    users: User[];
    selectedUser: User;
    userForm: FormGroup;

    REG_EXP: any = /[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,4}/;

    constructor(
      private formBuilder: FormBuilder,
      private userService: UsersService,

    ) {
        this.users = this.userService.getUsers();
    }

    clearControlValidation(name: string) {
      this.userForm.controls[name].markAsTouched();
    }

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

  this.userForm.controls["firstName"].markAsTouched();
  this.userForm.controls["lastName"].markAsTouched();
  this.userForm.controls["email"].markAsTouched();

  if (this.userForm.valid){
    let user: User = form.value;
    this.userService.addUser(user);
    this.userForm.reset();
    this.isFormSubmitted = false;
  }

}
    ngOnInit(): void {
      this.userForm = this.formBuilder.group({
        id: [this.selectedUser ? this.selectedUser.id : null, Validators.required],
        firstName: [this.selectedUser ? this.selectedUser.firstName : null, Validators.required],
        lastName: [this.selectedUser ? this.selectedUser.lastName : null, Validators.required],
        email: [this.selectedUser ? this.selectedUser.email : null, [Validators.required, Validators.pattern(this.REG_EXP)]],
        age: [this.selectedUser ? this.selectedUser.age : null ]
    })
  }

}
