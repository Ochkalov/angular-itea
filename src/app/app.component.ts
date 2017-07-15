import { Component, ElementRef } from "@angular/core";

import { AuthorizationComponent } from "./authorization/authorization.component";

import { User } from "./models/user";

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
    isLoginFormShown: boolean = false;
    loginElt: ElementRef;
    loginFormElt: ElementRef;
    title: string = "Angular ITEA";
    users: User[];

    navItems: NavItem[] = [
        { name: "Home", link: "home" },
        { name: "Catalog", link: "catalog" },
        { name: "Contact Us", link: "contact-us" },
        { name: "Admin", link: "admin" }
    ]

    constructor(
        private eltRef: ElementRef
    ) {
        this.loginElt = this.eltRef;
        this.loginFormElt = this.eltRef;
    }

    private findAncestor(el: any, cls: String) {
        while ((el = el.parentElement) && !el.classList.contains(cls)) {};  // Linter: "while statements must be braces" what does it mean?
        return el;
    }

    showLoginForm(e: Event) {
        e.stopPropagation();
        this.loginElt.nativeElement = e.target;
        this.isLoginFormShown = true;
        document.addEventListener('click', this.hideLoginFormListener.bind(this));
    }

    private hideLoginFormListener(e: Event) {
        e.stopPropagation();
        if (!this.findAncestor(e.target, 'login-form')) {
            this.isLoginFormShown = false;
            document.removeEventListener('click', this.hideLoginFormListener);
        }
    }

    showAlert(str: string) {
        alert(str);
    }
}
