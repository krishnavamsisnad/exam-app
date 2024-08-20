import { Component, ViewEncapsulation } from '@angular/core';
import { RatingComponentComponent } from '../rating-component/rating-component.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-review.component',
  standalone: true,
  imports: [RatingComponentComponent,CommonModule],
  templateUrl: './product-review.component.component.html',
  styleUrl: './product-review.component.component.css',
  encapsulation: ViewEncapsulation.Emulated
})
export class ProductReviewComponentComponent {
  productRating: number = 3;

  onRatingChange(newRating: number) {
    this.productRating = newRating;
    console.log(`Product rating updated to: ${newRating}`);
  }
}
