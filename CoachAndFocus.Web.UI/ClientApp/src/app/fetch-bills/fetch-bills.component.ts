import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fetch-bills',
  templateUrl: './fetch-bills.component.html'
})
export class FetchBillsComponent {
  public billsData$: Observable<BillsData>;

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    this.billsData$ = this.fetchBillsData();
  }

  private fetchBillsData(): Observable<BillsData> {
    return this.http.get<BillsData>(this.baseUrl + 'parliament/bills');
  }
}

interface BillsData {
  items: Bill[];
  totalResults: number;
  itemsPerPage: number;
}

interface Bill {
  billId: number;
  shortTitle: string;
  currentHouse: string;
  originatingHouse: string;
  lastUpdate: string;
  billWithdrawn: any;
  isDefeated: boolean;
  billTypeId: number;
  introducedSessionId: number;
  includedSessionIds: number[];
  isAct: boolean;
  currentStage: CurrentStage;
}

interface CurrentStage {
  id: number;
  stageId: number;
  sessionId: number;
  description: string;
  abbreviation: string;
  house: string;
  stageSittings: StageSitting[];
  sortOrder: number;
}

interface StageSitting {
  id: number;
  stageId: number;
  billStageId: number;
  billId: number;
  date: string;
}
