import { Injectable } from '@angular/core';
import { LabourCostElement } from 'src/app/interfaces/labour-cost-element';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LaborServiceService {

  constructor(/*private http: Httpclient*/) { }

  getLabours(): Observable<LabourCostElement[]> {
    return of([
      {payrollProvider: 'Direct Contractors', worker: 13, complianceScore: 0, grossPay: 48158, payrollAdmin: '', labourCost: 48158, workForce: 1.5},
      {payrollProvider: 'Worker Exchange Limited', worker: 1, complianceScore: 0, grossPay: 421, payrollAdmin: '', labourCost: 421, workForce: 0.1},
      {payrollProvider: 'Tradies Ltd', worker: 1, complianceScore: 0, grossPay: 1924, payrollAdmin: '', labourCost: 1924, workForce: 0.1},
      {payrollProvider: 'Agency Payroll Company Ltd', worker: 1, complianceScore: 0, grossPay: 8494, payrollAdmin: '', labourCost: 8494, workForce: 0.1},
      {payrollProvider: 'Simple Pay Limited', worker: 10, complianceScore: 0, grossPay: 18711, payrollAdmin: '', labourCost: 18711, workForce: 1.2},
      {payrollProvider: 'Senior Payroll Limited', worker: 813, complianceScore: 83, grossPay: 1173494, payrollAdmin: '', labourCost: 1173494, workForce: 93.8},
      {payrollProvider: 'Reliable Security Ltd', worker: 4, complianceScore: 0, grossPay: 9504, payrollAdmin: '', labourCost: 9504, workForce: 0.5},
      {payrollProvider: 'Personal Technology Limited', worker: 1, complianceScore: 0, grossPay: 4014, payrollAdmin: '', labourCost: 4014, workForce: 0.1},
      {payrollProvider: 'Paul\'s Building Services Ltd', worker: 1, complianceScore: 0, grossPay: 4500, payrollAdmin: '', labourCost: 4500, workForce: 0.1},
      {payrollProvider: 'Paddington Contracting Limited', worker: 7, complianceScore: 6, grossPay: 1753, payrollAdmin: '', labourCost: 1753, workForce: 0.8},
      {payrollProvider: 'Northern Contracting Limited', worker: 8, complianceScore: 0, grossPay: 10131, payrollAdmin: '', labourCost: 10131, workForce: 0.9},
      {payrollProvider: 'Hammer Pay Ltd', worker: 4, complianceScore: 0, grossPay: 4409, payrollAdmin: '', labourCost: 4409, workForce: 0.5},
      {payrollProvider: 'Construction Management Limited', worker: 1, complianceScore: 0, grossPay: 1586, payrollAdmin: '', labourCost: 1586, workForce: 0.1},
      {payrollProvider: 'CIS Payment Ltd', worker: 1, complianceScore: 0, grossPay: 2772, payrollAdmin: '', labourCost: 2772, workForce: 0.1},
      {payrollProvider: 'Canal Services Ltd', worker: 1, complianceScore: 0, grossPay: 605, payrollAdmin: '', labourCost: 605, workForce: 0.1}
    ])
  }
}
