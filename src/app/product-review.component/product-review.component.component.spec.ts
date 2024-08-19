import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductReviewComponentComponent } from './product-review.component.component';

describe('ProductReviewComponentComponent', () => {
  let component: ProductReviewComponentComponent;
  let fixture: ComponentFixture<ProductReviewComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductReviewComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductReviewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
