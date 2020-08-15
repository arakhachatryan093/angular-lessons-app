import { Product } from '../../core/models/product';
import { Component, OnInit } from '@angular/core';
import {DataService} from '../../core/services/data.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  providers: [DataService]
})
export class ProductsListComponent implements OnInit {
  public products: Product[] = [];
  public chachedProducts: Product[] = [];
  public selectedProduct: Product;
  public searchText: string;

  public condition = true;
  public isLoading = true;

  public toggle(): void {
    this.condition = !this.condition;
  }

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    setTimeout(() => {
      this.getProducts();
    }, 2000);
  }

  public getSelectedProduct(product: Product): void {
    this.selectedProduct = product;
  }

  public isSelected(product: Product): boolean {
    if (product && this.selectedProduct && product.id === this.selectedProduct.id) {
      return true;
    }

    return false;
  }

  public searchProducts(searchText: string): void {
    this.searchText = searchText;

    this.products = this.chachedProducts.filter((product: Product) => {
      return product.title.toLowerCase().includes(this.searchText.toLowerCase());
    });
  }
  public getProducts() {
   this.dataService.getData().subscribe(data => {
     this.chachedProducts = this.products = data.data;
   });
    this.isLoading = !this.isLoading;
  }
}
