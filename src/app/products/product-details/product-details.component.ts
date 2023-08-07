import { Component } from '@angular/core';
import IProduct from '../model/iproduct';
import { ActivatedRoute,Router } from '@angular/router';
import { ProductApiClientService } from '../product-api-client.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
product:IProduct | undefined
errorMessage:string=''
constructor(private route:ActivatedRoute,private router:Router,
  private apiClient:ProductApiClientService)
{

}

ngOnInit():void{
  const param=this.route.snapshot.paramMap.get('id')
  if(param){
    const id=+param
  this.apiClient.getProduct(id).subscribe({
    next:product=>this.product=product,
    error:err=> this.errorMessage=err
  })
  }
}

onBack():void{
  this.router.navigate(['/products'])
}


}
