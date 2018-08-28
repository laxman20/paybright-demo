import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-payment-select',
  templateUrl: './payment-select.component.html',
  styleUrls: ['./payment-select.component.css']
})
export class PaymentSelectComponent implements OnInit {

  @Output() submit = new EventEmitter<any>();

  private selection: number;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.submit.emit({});
  }

}
