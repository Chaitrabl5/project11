import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http'
import { Observable,catchError,tap,throwError } from 'rxjs';
import IProduct from './model/iproduct';
@Injectable({
  providedIn: 'root'
})
export class ProductApiClientService {

  constructor(private http:HttpClient) { }
getProducts():Observable<IProduct[]>{
return this.http.get<IProduct[]>('http://localhost:8888/products')
.pipe(tap(data=>console.log(data)),
catchError((err:HttpErrorResponse)=>throwError(()=>
`An Error Occured ${err.message}`)))

}

getProduct(id:number):Observable<IProduct>{
  return this.http.get<IProduct>(`http://localhost:8888/products/${id}`)
  .pipe(tap(data=>console.log(data)),
  catchError((err:HttpErrorResponse)=>throwError(()=>
  `An Error Occured ${err.message}`)))

}

}
