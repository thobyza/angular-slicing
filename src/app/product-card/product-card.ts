import { Component, input, ChangeDetectionStrategy } from '@angular/core';

// Passing data to components with input signals
// https://angular.dev/tutorials/signals/5-component-communication-with-signals

@Component({
	selector: "app-product-card",
	imports: [],
	templateUrl: "./product-card.html",
	styleUrls: ["./product-card.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCard {
	public name = input.required<string>();
	public price = input.required<number>();
	public available = input<boolean>(true);
}
