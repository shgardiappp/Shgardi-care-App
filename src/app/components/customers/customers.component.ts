import { Component, OnInit } from '@angular/core';
import { customerData } from 'src/app/api/customerAPI';
import { Orderstypes } from 'src/app/interfaces/orderstypes';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  customerData:Orderstypes[] = [];


  constructor() { }

  ngOnInit(): void {
    this.customerData = customerData;

  }

}
