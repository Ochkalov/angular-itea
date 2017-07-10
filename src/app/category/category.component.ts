import { Component, OnInit } from '@angular/core';
import {Category} from "../models/category";
import {CategoriesServise} from "../services/categories.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
    category: Category;

  constructor(
    private categoriesService: CategoriesServise,
    private activatedRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    let id: number = this.activatedRouter.snapshot.params["id"];
    this.categoriesService.getCategoryById(id)
      .subscribe(
        category => this.category = category,
        error => console.error(error)
      )
  }

}
