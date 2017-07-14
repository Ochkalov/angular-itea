import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AdminComponent } from "./admin.component";

import { AdminRoutingModule } from "./admin-routing.module";

import { AdminService } from "../services/admin.service";

@NgModule({
    imports: [
        AdminRoutingModule,
        CommonModule
    ],
    declarations: [
        AdminComponent
    ],
    providers: [
        AdminService
    ]
})

export class AdminModule {}
