import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Product } from "../models/product.model";
import { PRODUCTS } from "../mock-data/product.data";


@Injectable({providedIn: 'root'})
export class ProductService {
  getAllProducts(): Observable<Product[]>{
    return of(PRODUCTS)
  }
}