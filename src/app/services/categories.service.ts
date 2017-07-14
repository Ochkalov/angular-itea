import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import { LinksCommon } from "../common/links.common";
import { Category } from "../models/category";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";

@Injectable()
export class CategoriesService {

    private endpoint: string = `${LinksCommon.ENDPOINT}category/`;
    private headers: Headers = new Headers({ "Content-Type": "application/json" });

    constructor(
        private http: Http
    ) {}

    getCategories(): Observable<Category[]> {
        return this.http.get(this.endpoint)
                        .map(
                            response => response.json() as Category[]
                        )
                        .catch(this.errorHandler)
    }

    getCategoryById(id: any): Observable<Category> {
        const URL = `${this.endpoint}${id}`;
        return this.http.get(URL)
                        .map(
                            response => response.json() as Category
                        )
                        .catch(this.errorHandler)
    }

    addCategory(data: Category): Promise<any> {
        return this.http.post(this.endpoint, data, this.headers)
                   .toPromise()
                   .then(
                       response => response.json()
                   )
                   .catch(this.errorHandler)
    }

    deleteCategory(id: number): Promise<any> {
        const URL = `${this.endpoint}${id}`;
        return this.http.delete(URL)
                        .toPromise()
                        .then(
                            response => response.json()
                        )
                        .catch(this.errorHandler)
    }

    editCategory(Category: Category): Promise<Category> {
        const URL = `${this.endpoint}${Category.id}`;
        return this.http.put(URL, Category)
                        .toPromise()
                        .then(
                            response => response.json() as Category
                        )
                        .catch(this.errorHandler)
    }

    private errorHandler(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || "";
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}