import { Product } from '../../../core/models/product';
import { Component, Input, Output, EventEmitter, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.scss']
})
export class ProductRowComponent implements OnInit {
  public editForm = false;
  public  clickedIndex: number;
  public isLoading = false;
  @ViewChild('productForm') private draggableElement: ElementRef;

  @Input()
  public product: Product;

  @Output()
  public selectedProduct: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {

  }


  public getDetails (): void {
    this.selectedProduct.emit(this.product);
  }

  public openEdit(product: Product) {
    this.editForm = !this.editForm;

  }

  public updateProduct(product: Product): any {
    setTimeout(() => {
      this.isLoading = !this.isLoading;
      return this.product;
    }, 2000);

   this.isLoading = !this.isLoading;
    this.editForm = !this.editForm;
   return  true;
  }

}
