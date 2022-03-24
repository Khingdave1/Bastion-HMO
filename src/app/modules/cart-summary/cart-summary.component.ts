import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  counter: number = 1
  unitPrice: any = 5400
  unitPrice2: any = 7500
  unitPrice3: any = 10200
  subTotal: any = 5400
  id: any = "mission"

  constructor() { }

  ngOnInit(): void {
  }

  decrement() {
    this.quantity(-1)
    this.subTotal = this.unitPrice * this.counter
  }
  increment() {
    this.quantity(+1)
    this.subTotal = this.unitPrice * this.counter
  }

  quantity(delta: number) {
    this.counter = this.counter + delta
    if (this.counter <= 1) {
      this.counter = 1
    }
  }

  tabChange(ids: any) {
    this.id = ids

    console.log(this.id)
  }


}
