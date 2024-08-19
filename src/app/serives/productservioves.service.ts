import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductserviovesService {

  constructor(public http:HttpClient) { }
  getAllproducts(){
    return this.http.get("https://fakestoreapi.com/products")
   }
   getbyid(id:any){
     return this.http.get(`https://fakestoreapi.com/products/`+id)
   }

}
