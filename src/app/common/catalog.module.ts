import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MdButtonModule,
  MdListModule
} from "@angular/material";

import { CatalogComponent } from "../catalog/catalog.component";
import { CategoryComponent } from "../category/category.component";

import { CatalogRoutingModule } from "../catalog/catalog-routing.module";
import { CategoriesService } from "../services/categories.service";

@NgModule({
  imports: [
    CommonModule,
    CatalogRoutingModule,
    MdButtonModule,
    MdListModule
  ],
  declarations: [
    CatalogComponent,
    CategoryComponent
  ],
  providers: [
    CategoriesService
  ]
})

export class CatalogModule { }
