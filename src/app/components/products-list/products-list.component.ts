import { Product } from '../../core/models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
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

  constructor() {

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
    this.chachedProducts = this.products = [
      new Product(
        1,
        'ULTRABOOST DNA PRIME SHOES',
        `Created to break world marathon records, the Adizero Prime became the first adidas shoe made with adidas Primeknit.`,
        '200',
        // tslint:disable-next-line:max-line-length
        'https://assets.adidas.com/images/w_600,f_auto,q_auto/51abe5fdaeb64520bd38abbf00fe35c9_9366/Ultraboost_DNA_Prime_Shoes_Red_FV6053.jpg'
      ),
      new Product(
        2,
        'STAN SMITH SHOES',
        'Roll with the classic. Back in the day, Stan Smith won big on the tennis court.',
        '80',
        'https://assets.adidas.com/images/w_600,f_auto,q_auto/eb638fce8b4f4678b40aa80e00818f3a_9366/Stan_Smith_Shoes_White_M20324.jpg'
      ),
      new Product(
        3,
        'SUPERSTAR SHOES',
        'Originally made for basketball courts in the \'70s. Celebrated by hip hop royalty in the \'80s.',
        '82',
        'https://assets.adidas.com/images/w_600,f_auto,q_auto/ff2e419f1eda4ebab23faad6009a3a9e_9366/Superstar_Shoes_White_EG4958.jpg'
      )
    ];
    this.isLoading = !this.isLoading;
  }
}
