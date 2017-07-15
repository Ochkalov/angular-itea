import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { AuthService } from "../services/auth.service";

@Component({
    selector: "app-authorization",
    templateUrl: "./authorization.component.html",
    styleUrls: ["./authorization.component.styl"]
})

export class AuthorizationComponent {
    message: string;

    constructor(
        public authService: AuthService,
        public router: Router
    ) {}

    logIn() {
        this.message = "Logging in...";
        this.authService.logIn().subscribe(
            () => { 
                this.setMessage();
                if (this.authService.isLoggedIn) {
                    let redirect: string = this.authService.redirectUrl ? this.authService.redirectUrl : "/admin";

                    this.router.navigate([redirect]);
                } 
            }
        )
    }

    logOut() {
        this.authService.logOut();
        this.setMessage();
    }

    setMessage() {
        this.message = `You are logged ${this.authService.isLoggedIn ? "in" : "out"}`;
    }
}