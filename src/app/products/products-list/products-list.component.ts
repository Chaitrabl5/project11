import { Component } from '@angular/core';
import { ProductApiClientService } from '../product-api-client.service';
import IProduct from '../model/iproduct';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
products:IProduct[]=[]
filteredProducts: IProduct[]=[]
errorMessage:string=''
title:string='Products App'
imageWidth:number=50
imageMargin:number=2
showImage:Boolean=false
 private _searchKey:string=''
  //dependency injection
  constructor(private apiClient:ProductApiClientService)
  {

  }
  ngOnInit():void{
    this.apiClient.getProducts()
    .subscribe({
      next:products=>{
        this.products=products
      this.filteredProducts=this.products
      },
      error:err=>this.errorMessage=err
    })
  }

  showOrHideImage():void{
    this.showImage=!this.showImage
  }
  get searchKey():string{
    return this._searchKey
  }
  set searchKey(value:string){
    this._searchKey=value
    this.filteredProducts=
    this.products.filter((product:IProduct)=>
     product.productName.toLocaleLowerCase().
    includes(value.toLocaleLowerCase()))
  }
  onRatingClicked(message:string):void{
    this.title=`Product List ${message}`
  }
}
