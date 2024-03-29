import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: any[] = [];

  constructor(public pdtSer: ProductsService) {

  }

  ngOnInit(): void {
      this.pdtSer.getCategories().subscribe({
        next: (data: any[]) => {
         this.categories = data;
        },
        error: (error: any) => {
          console.log(error);
        }
      })
  }
}
