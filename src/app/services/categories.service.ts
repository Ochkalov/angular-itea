import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";


import {LinksCommon} from "../common/links.common";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import {Category} from "../models/category";

@Injectable ()
export class CategoriesServise {
  private endpoint: string = `${LinksCommon.ENDPOINT}category/`;
  private headers: Headers = new Headers({
    "Content-Type": "aplication/json"
  });

  constructor(private  http: Http) {
  }

  getCategories(): Observable<Category[]> {
    return this.http.get(this.endpoint)
      .map(
        response => response.json() as Category[]
      )
      .catch(this.errorHendler)
  }

  getCategoryById(id: any): Observable<Category> {
    const URL = `${this.endpoint}${id}`;
    return this.http.get(URL)
      .map(
        response => response.json() as Category
      )
      .catch(this.errorHendler)
  }

  /*addCategory(data: Category): Promise<any> {
    return this.http.post()
  }*/

  private errorHendler(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || "";
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} -  ${error.statusText || ""} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
