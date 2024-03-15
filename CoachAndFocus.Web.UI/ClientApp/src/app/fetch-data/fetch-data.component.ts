import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {

  public billsData: BillsData = {
      items: [],
      totalResults: 0,
      itemsPerPage: 0
    };

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<BillsData>(baseUrl + 'bills').subscribe(result => {
      this.billsData = result;
    });
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
