import { Component, ElementRef, AfterViewChecked, OnInit } from "@angular/core";
// Added new class for navigation items elements
export class NavItem {
  name: string;
  link: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.styl"]
})

export class AppComponent implements AfterViewChecked, OnInit {
  isLoginFormShown: boolean = false;
  signInElt: ElementRef;
  loginFormElt: ElementRef;
  title: string = "Angular ITEA";
  // Variable with navigation items
  navItems: NavItem[] = [
    { name: "Home", link: "Home" },
    { name: "Catalog", link: "Catalog" },
    { name: "Contact Us", link: "Contact-Us" }
  ]

  constructor(
    private eltRef: ElementRef
  ) {
    this.signInElt = this.eltRef;
    this.loginFormElt = this.eltRef;
  }

  showLoginForm(e: Event) {
    e.stopPropagation();
    this.signInElt.nativeElement = e.target;
    this.isLoginFormShown = true;
  }

  ngAfterViewChecked() {
    this.loginFormElt.nativeElement = document.querySelector(".login-form");
    console.log(this.loginFormElt.nativeElement);
  }

  ngOnInit() {
    document.addEventListener("click", (e: Event) => {
      if((e.target !== this.signInElt.nativeElement || e.target !== this.loginFormElt.nativeElement) && this.isLoginFormShown === true ) {
        this.isLoginFormShown = false;
      }
    })
  }
}
