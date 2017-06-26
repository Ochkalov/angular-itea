import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { RegExpCommon } from "../common/regexp.common";

import { User } from "../models/user";

import { UsersService } from "../services/users.service";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"]
})

export class RegistrationComponent implements OnInit {

  isFormSubmitted: boolean = false;
  registrationForm: FormGroup;
  showSuccessMessage: boolean = false;
  user: User;

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService
  ) {}

  onSubmitRegistration(e: Event, data: FormGroup) {
    e.preventDefault();
    this.user = this.registrationForm.value;
    this.usersService.registerUser(this.user)
      .then(
        () => this.showSuccessMessage = true
      )
      .catch(
        () => {
          this.showSuccessMessage = true;
          console.log(this.user);
        }
      )
  }

  ngOnInit(): void {
    this.user = new User();

    this.registrationForm = this.formBuilder.group({
      id: [null],
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, [Validators.required, Validators.pattern(RegExpCommon.EMAIL)]],
      age: [null]
    })
  }
}
