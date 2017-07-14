import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {CatalogComponent} from "../catalog/catalog.component";
import {CategoryComponent} from "../category/category.component";
import {AuthGuardService} from "../services/auth-guard.sevice";
import {UsersManagementComponent} from "../users-management/users-management.component";
import {AdminDashboardComponent} from "../admin-dashboard/admin-dashboard.component";
import {CategoriesManagementComponent} from "../categories-management/categories-management.component";



const ADMIN_ROUTES: Routes = [
  { path: "admin", component: CatalogComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: "",
        canActivateChild: [AuthGuardService],
        children:[
          {path: "categories",
          component: CategoriesManagementComponent},
          {path: "user",
            component: UsersManagementComponent},
          {path: "",
            component: AdminDashboardComponent}
        ]

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ADMIN_ROUTES)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
