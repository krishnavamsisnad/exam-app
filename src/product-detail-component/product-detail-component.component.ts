import { Component } from '@angular/core';

@Component({
  selector: 'app-product-detail-component',
  standalone: true,
  imports: [],
  templateUrl: './product-detail-component.component.html',
  styleUrl: './product-detail-component.component.css'
})
export class ProductDetailComponentComponent {

  

constructor (public )
  ngOnInit(){
    let id=this.router.snapshot.params['id']
   this.http.getbyid(id).subscribe((data:any)=>{
     console.log(data)
     this.product=data
   })
}
