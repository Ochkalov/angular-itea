import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CatalogComponent } from "./catalog/catalog.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { RegistrationComponent } from "./registration/registration.component";

// Define routes
const ROUTES: Routes = [
  // { path: "name of path", component: "name of component class which will be binded to path" }
  { path: "", redirectTo: "Home", pathMatch: "full" },
  { path: "Home", component: HomeComponent },
  // Added routes for new components
  { path: "Catalog", component: CatalogComponent },
  { path: "Contact-Us", component: ContactUsComponent },
  { path: "Registration", component: RegistrationComponent },
  // Umached path must be in the end of all routes
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})

export class RoutingModule { }
