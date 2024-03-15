import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public bills: Bill[] = [];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Bill[]>(baseUrl + 'bills').subscribe(result => {
      this.bills = result;
    });
  }
}

interface Bill {
  billId: number;
  shortTitle: string;  
}
