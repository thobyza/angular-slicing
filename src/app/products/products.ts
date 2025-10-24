import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { ProductCard } from '../product-card/product-card'

@Component({
  selector: 'app-products',
  imports: [ProductCard],
  templateUrl: './products.html',
  styleUrl: './products.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class Products {
  public productName = signal<string>('');
  public productPrice = signal<number>(0);

  // this.productName.set('Updated Product');

}
