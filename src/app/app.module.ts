import { BrowserModule } from "@angular/platform-browser";
// Imported Animations module fro angular animations
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
// Added import of ReactiveFormsModule to work with data-driven forms
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// Added import of HttpModule to work with http protocol
import { HttpModule } from "@angular/http";

import { RoutingModule } from "./routing.module";

import { AppComponent } from "./app.component";
import { AuthorizationComponent } from "./authorization/authorization.component";
import { CatalogComponent } from "./catalog/catalog.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { RegistrationComponent } from "./registration/registration.component";

import { UsersService } from "./services/users.service";

// Imported hammerjs for angular/material
import "hammerjs";

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    CatalogComponent,
    ContactUsComponent,
    HomeComponent,
    NotFoundComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RoutingModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
