import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";

import { BoldDirective } from "./directives/bold.directive";
import { WhileDirective } from "./directives/while.directive";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BoldDirective,
    WhileDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
