
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { LabourCostElement } from './interfaces/labour-cost-element';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'front-challenge';
  displayedColumns: string[] = [
    'payrollProvider',
    'worker',
    'complianceScore',
    'grossPay',
    'payrollAdmin',
    'labourCost',
    'workForce'
  ];

  footerData = {
    'worker': 0,
    'complianceScore': 0,
    'grossPay': 0,
    'payrollAdmin': 0,
    'labourCost': 0,
    'workForce': 0
  };

  restData = null;

  // Inicializamos labours que contendra los datos de la tabla con datos por default
  labours = new MatTableDataSource(DEFAULT_DATA);

  constructor(private _liveAnnouncer: LiveAnnouncer, private http: HttpClient) {}

  @ViewChild(MatSort, {static: true}) sort!: MatSort;

  ngOnInit(): void {
    this.http.get<any>('http://localhost:3000/labourCost').subscribe(data => {
      this.restData = data;

      this.restData != null ? ELEMENT_DATA = this.restData : ELEMENT_DATA = DEFAULT_DATA

      // En esta lineas refrescamos la informacion de la tabla
      this.labours = new MatTableDataSource(ELEMENT_DATA);
      this.labours.sort = this.sort;

      // Con este metodo totalizamos los datos que apareceran al final de la tabla
      this.footerData.worker = this.getSum(ELEMENT_DATA, 'worker');
      this.footerData.complianceScore = this.getSum(ELEMENT_DATA, 'complianceScore');
      this.footerData.grossPay = this.getSum(ELEMENT_DATA, 'grossPay');
      this.footerData.payrollAdmin = this.getSum(ELEMENT_DATA, 'payrollAdmin');
      this.footerData.labourCost = this.getSum(ELEMENT_DATA, 'labourCost');
      this.footerData.workForce = this.getSum(ELEMENT_DATA, 'workForce');
    })
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  getSum(labours: LabourCostElement[], attr: string): number {
    let sum: number = 0
    for (const labour of labours) {
      sum = sum + (<any>labour)[attr] || 0;
    }
    return sum;
  }
}

let ELEMENT_DATA:LabourCostElement[];

const DEFAULT_DATA:LabourCostElement[] = [
  {payrollProvider: '-', worker: 0, complianceScore: 0, grossPay: 0, payrollAdmin: '', labourCost: 0, workForce: 0.0}
];
