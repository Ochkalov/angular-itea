import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { RegExpCommon } from "../common/regexp.common";

import { User } from "../models/user";

import { UsersService } from "../services/users.service";

@Component({
    selector: "app-registration",
    templateUrl: "./registration.component.html",
    styleUrls: ["./registration.component.styl"]
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
        if(this.user.id !== null) {
            this.usersService.editUser(this.user)
                .then(
                    () => this.showSuccessMessage = true
                )
        } else {
            this.usersService.registerUser(this.user)
            .then(
                res => {
                    this.user.id = res.insertId;
                    this.showSuccessMessage = true;
                }
            )
            .catch(
                e => console.error(e)
            )
        }
    }

    deleteUser(user: User) {
        this.usersService.deleteUser(user.id)
            .then(
                () => {
                    alert("User was deleted");
                    this.user = null;
                    this.showSuccessMessage = false;
                    this.registrationForm.reset();
                }
            )
    }

    editUser(user: User) {
        this.showSuccessMessage = false;
        this.registrationForm.controls["id"].setValue(user.id);
        this.registrationForm.controls["firstName"].setValue(user.firstName);
        this.registrationForm.controls["lastName"].setValue(user.lastName);
        this.registrationForm.controls["email"].setValue(user.email);
        this.registrationForm.controls["password"].setValue(user.password);
    }

    ngOnInit(): void {
        this.user = new User();

        this.registrationForm = this.formBuilder.group({
            id: [null],
            firstName: [null, Validators.required],
            lastName: [null, Validators.required],
            email: [null, [Validators.required, Validators.pattern(RegExpCommon.EMAIL)]],
            password: [null]
        })
    }
}