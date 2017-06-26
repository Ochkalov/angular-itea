import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
// Added import of ReactiveFormsModule to work with data-driven forms
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// Added import of HttpModule to work with http protocol
import { HttpModule } from "@angular/http";

import { RoutingModule } from "./routing.module";

import { AppComponent } from "./app.component";
import { CatalogComponent } from "./catalog/catalog.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { RegistrationComponent } from "./registration/registration.component";

import { BoldDirective } from "./directives/bold.directive";
import { WhileDirective } from "./directives/while.directive";

import { FactorialPipe } from "./pipes/factorial.pipe";
import { JoinPipe } from "./pipes/join.pipe";

import { UsersService } from "./services/users.service";

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    ContactUsComponent,
    HomeComponent,
    NotFoundComponent,
    RegistrationComponent,
    BoldDirective,
    WhileDirective,
    FactorialPipe,
    JoinPipe
  ],
  imports: [
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
