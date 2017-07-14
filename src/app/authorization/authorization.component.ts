import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.srvice";



import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RegExpCommon } from "../common/regexp.common";
import { User } from "../models/user"




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
  ){}

  logIn() {
      this.message = "Loggin in..";
      this.authService.logIn().subscribe(
        () => {
          if (this.authService.isLoggedIn) {
            let redirect = this.authService.redirectUrl ?
              this.authService.redirectUrl : "/admin";

            this.router.navigate([redirect])
          }
        }
      )
  }

  logOut(){
    this.authService.logOut();
    this.setMessage();
  }

  setMessage() {
    this.message = `You are logged ${this.authService.isLoggedIn ? "in" : "out"}`
  }

  /*@Input() user: User;

  @Output() onAlerted = new EventEmitter<string>();

  alertMessage: string;

  authorizationForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {}

  alertShow(str: string ) {
    this.alertMessage = str;
    this.onAlerted.emit(this.alertMessage);
  }

  ngOnInit() {
    this.authorizationForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(RegExpCommon.EMAIL)]],
      password: [null, Validators.required]
    })
  }*/
}
