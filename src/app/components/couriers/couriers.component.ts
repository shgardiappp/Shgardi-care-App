import { courierData } from './../../api/ordersApi';
import { Component, OnInit } from '@angular/core';
import { Orderstypes } from 'src/app/interfaces/orderstypes';

@Component({
  selector: 'app-couriers',
  templateUrl: './couriers.component.html',
  styleUrls: ['./couriers.component.scss']
})
export class CouriersComponent implements OnInit {

  courierData:Orderstypes[] = [];


  constructor() { }

  ngOnInit(): void {
    this.courierData = courierData;
  }

}
