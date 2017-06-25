import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { regExpCommon } from "../common/regexp.common"

import { UsersService } from "../services/users.service";

import { User } from "../models/user";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  showSuccessMassege: ;
  user: User;

  constructor(
    private formBilder: FormBilder,
    private userService: UsersService
  ){}

  onSubmitRegistration(e:Event,data:FormGroup){
      e.preventDefault();
      this.user = this.registrationForm.value;
      this.userService.registerUser(this.user)
  }

  ngOnInit():void {
      this.user = new User();
      this.registrationForm;
  }

}
