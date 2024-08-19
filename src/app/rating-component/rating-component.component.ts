import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rating-component',
  standalone: true,
  imports: [CommonModule,RatingComponentComponent],
  templateUrl: './rating-component.component.html',
  styleUrl: './rating-component.component.css'
})
export class RatingComponentComponent {
  @Input() rating: number = 0;
  @Input() maxRating: number = 5;
  @Output() ratingChange: EventEmitter<number> = new EventEmitter<number>();
  stars: boolean[] = [];

  ngOnInit() {
    this.updateStars();
  }

  updateStars() {
    this.stars = Array(this.maxRating).fill(false).map((_, i) => i < this.rating);
  }

  onClick(rating: number): void {
    this.rating = rating;
    this.updateStars();
    this.ratingChange.emit(this.rating);
  }
}

