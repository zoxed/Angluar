import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/_services/services/order.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  OrderService!: any[];

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getOrders()
      .subscribe(orders => this.orderService = orders);
  }
}
