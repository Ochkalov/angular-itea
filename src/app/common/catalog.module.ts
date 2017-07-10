import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {CategoriesServise} from "../services/categories.service";
import {CatalogComponent} from "../catalog/catalog.component";
import {CatalogRoutingModule} from "../catalog/catalog-routing.module";
import {MdButtonModule, MdListModule} from "@angular/material";
import {CategoryComponent} from "../category/category.component";

@NgModule({
  declarations: [CatalogComponent,
    CategoryComponent
  ],
  imports: [CommonModule,
    CatalogRoutingModule,
    MdButtonModule,
    MdListModule

  ],
  providers: [CategoriesServise],
})


export class CatalogModule {

}

