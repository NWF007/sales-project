import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {


  // array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Nico", "Fortuin", "ni@ab.com", 1000),
    new SalesPerson("Ico", "Rtuin", "i@ab.com", 5000),
    new SalesPerson("Co", "Ortuin", "niqw@ab.com", 8000),
    new SalesPerson("O", "Fuin", "nias@ab.com", 10000),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
