import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'userorder-list',
  templateUrl: './userorder.list.component.html',
  styleUrls: ['./userorder.list.component.css']
})
export class UserOrderListComponent implements OnInit {

  fooditems: any[] = []

  constructor(
    private router: Router,
    private orderService: OrderService) {
      this.loadOrders()
  }

  loadOrders() {
    this.orderService
      .getorders()
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.fooditems = response['data']
        }
      })
  }


  onDelete(id: number) {
    this.orderService
      .deleteFood(id)
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.loadOrders()
        } else {
          console.log(response['error'])
        }
      })
  }

  ngOnInit() {
      }

}