import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductserviovesService } from '../serives/productservioves.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { productsdata } from '../../data/data';


@Component({
  selector: 'app-productslist',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './productslist.component.html',
  styleUrl: './productslist.component.css'
})
export class ProductslistComponent  {
proudcts=productsdata
constructor(public http:ProductserviovesService){}




}
