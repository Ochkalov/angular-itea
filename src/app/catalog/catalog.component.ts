import {Component, OnInit} from "@angular/core";
import { ActivatedRoute, Router} from "@angular/router";
import {Category} from "../models/category";

import {CategoriesServise} from "../services/categories.service";

@Component({
  selector: "app-catalog",
  templateUrl: "./catalog.component.html",
  styleUrls: ["./catalog.component.styl"]
})
export class CatalogComponent implements OnInit {

  categories: Category[];
  selectedCategory: Category;


  constructor(private categoriesServise: CategoriesServise,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  onSelect(category: Category) {
    this.selectedCategory = category;
    this.router.navigate([category.id], {relativeTo: this.activatedRoute});
  }


  ngOnInit() {
    this.categoriesServise.getCategories()
      .subscribe(
        categories => this.categories = categories,
        error => console.error(error)
      )
  }

}
