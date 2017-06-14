import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { RoutingModule } from "./routing.module";

import { AppComponent } from "./app.component";
import { CatalogComponent } from "./catalog/catalog.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";

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
        BoldDirective,
        WhileDirective,
        FactorialPipe,
        JoinPipe
    ],
    imports: [
        BrowserModule,
        RoutingModule
    ],
    providers: [UsersService],
    bootstrap: [AppComponent]
})
export class AppModule { }
