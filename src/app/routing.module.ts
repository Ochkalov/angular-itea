import { NgModule } from "@angular/core";
import { RouterModule, Routes, PreloadAllModules } from "@angular/router";

import { AuthorizationComponent } from "./authorization/authorization.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { RegistrationComponent } from "./registration/registration.component";
import {AdminComponent} from "./admin/admin.component";
import {AuthGuardService} from "./services/auth-guard.service";

const ROUTES: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "contact-us", component: ContactUsComponent },
    { path: "registration", component: RegistrationComponent },
    { path: "login", component: AuthorizationComponent },
    { path: "admin",
      loadChildren: "app/admin/admin.module#AdminModule",
      canLoad: [AuthGuardService] },
    { path: "**", component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules, useHash: true})],
    exports: [RouterModule]
})

export class RoutingModule { }
