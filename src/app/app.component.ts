import {Component, ElementRef} from "@angular/core";
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

export class AppComponent {
  isLoginFormShow: boolean = false;
  title: string = "Angular ITEA";
  signInElt:ElementRef;
  loginFormElt:ElementRef;
  // Variable with navigation items
  navItems: NavItem[] = [
    { name: "Home", link: "Home" },
    { name: "Catalog", link: "Catalog" },
    { name: "Contact Us", link: "Contact-Us" }
  ]

  constructor(
    private elfRef:ElementRef
  ){
    this.signInElt = this.elfRef;
    this.loginFormElt = this.elfRef;
    document.addEventListener("click", (e:Event) => {
      if (e.target !== this.signInElt.nativeElement || e.target !== this.loginFormElt.nativeElement) {
      this.isLoginFormShow = false
      }
    })
  }

  showLoginForm(e:Event){
    this.signInElt.nativeElement = e.target;
    this.isLoginFormShow = true;
  }

  ngAfterViewChecked(){
    this.loginFormElt.nativeElement = document.querySelector("app-authorization")
  }
}
