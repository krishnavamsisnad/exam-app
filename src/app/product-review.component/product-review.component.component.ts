import { Component } from '@angular/core';

@Component({
  selector: 'app-product-review.component',
  standalone: true,
  imports: [],
  templateUrl: './product-review.component.component.html',
  styleUrl: './product-review.component.component.css'
})
export class ProductReviewComponentComponent {
  productRating: number = 3;

  onRatingChange(newRating: number) {
    this.productRating = newRating;
    console.log(`Product rating updated to: ${newRating}`);
  }
}
