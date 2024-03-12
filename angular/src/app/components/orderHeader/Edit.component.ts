import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { OrderHeaderService } from './OrderHeader.service'
import { Util } from '../../util.service'

@Component({
  selector: 'orderHeader-edit',
  template: `
    <div class="container">
      <div class="row">
        <div class="col">
          <form ngNativeValidate method="post" (submit)="edit()">
            <div class="row">
              <div class="form-group col-md-6 col-lg-4">
                <label for="order_header_id">Id</label>
                <input readonly id="order_header_id" name="Id" class="form-control form-control-sm" [(ngModel)]="orderHeader.Id" type="number" required />
                <span *ngIf="errors.Id" class="text-danger">{{errors.Id}}</span>
              </div>
              <div class="form-group col-md-6 col-lg-4">
                <label for="order_header_customer_id">Customer</label>
                <select id="order_header_customer_id" name="CustomerId" class="form-control form-control-sm" [(ngModel)]="orderHeader.CustomerId" required>
                  <option *ngFor="let customer of customers" value="{{customer.Id}}" [selected]="orderHeader != null && orderHeader.CustomerId == customer.Id">{{customer.Name}}</option>
                </select>
                <span *ngIf="errors.CustomerId" class="text-danger">{{errors.CustomerId}}</span>
              </div>
              <div class="form-group col-md-6 col-lg-4">
                <label for="order_header_order_date">Order Date</label>
                <input id="order_header_order_date" name="OrderDate" class="form-control form-control-sm" [(ngModel)]="orderHeader.OrderDate" data-type="date" autocomplete="off" required />
                <span *ngIf="errors.OrderDate" class="text-danger">{{errors.OrderDate}}</span>
              </div>
              <div class="col-12">
                <a class="btn btn-sm btn-secondary" (click)="util.goBack('/orderHeader', $event)" routerLink="/orderHeader">Cancel</a>
                <button class="btn btn-sm btn-primary">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>`
})
export class OrderHeaderEdit {
  
  orderHeader?: any = {}
  customers?: any[]
  errors?: any = {}
  constructor(private router: Router, private route: ActivatedRoute, private OrderHeaderService: OrderHeaderService, public util: Util) { }
  
  ngOnInit() {
    this.get().add(() => {
      setTimeout(() => { this.util.initView(true) })
    })
  }

  get() {
    return this.OrderHeaderService.edit(this.route.snapshot.params['id']).subscribe(data => {
      this.orderHeader = data.orderHeader
      this.customers = data.customers
    })
  }

  edit() {
    this.OrderHeaderService.edit(this.route.snapshot.params['id'], this.orderHeader).subscribe(() => {
      this.util.goBack('/orderHeader')
    }, (e) => {
      if (e.error.errors) {
        this.errors = e.error.errors
      }
      else {
        alert(e.error.message)
      } 
    })
  }
}