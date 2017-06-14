import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";

// Define routes
const ROUTES: Routes = [
    // { path: "name of path", component: "name of component class which will be binded to path" }
    { path: "", redirectTo: "Home", pathMatch: "full" },
    { path: "Home", component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})

export class RoutingModule { }