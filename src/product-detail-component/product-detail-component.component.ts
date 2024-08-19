import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductserviovesService } from '../app/serives/productservioves.service';

@Component({
  selector: 'app-product-detail-component',
  standalone: true,
  imports: [],
  templateUrl: './product-detail-component.component.html',
  styleUrl: './product-detail-component.component.css'
})
export class ProductDetailComponentComponent {

  product: any
  counter = 0
  num = 1
  constructor(public router: ActivatedRoute, public rout: Router, public http: ProductserviovesService) {

  }

  ngOnInit() {
    let id = this.router.snapshot.params['id']
    this.http.getbyid(id).subscribe((data: any) => {
      console.log(data)
      this.product = data
    })
  }

  next() {
    this.rout.navigateByUrl('/buynow')

  }
  inc() {
    this.counter = this.num++
  }
  dec() {
    this.counter = this.num--
  }
}
