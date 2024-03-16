import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fetch-early-day-motions',
  templateUrl: './fetch-early-day-motions.component.html'
})
export class FetchEarlyDayMotionsComponent {
  public earlyDayMotionData$: Observable<EarlyDayMotionData>;

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    this.earlyDayMotionData$ = this.fetchEarlyDayMotionData();
  }

  private fetchEarlyDayMotionData(): Observable<EarlyDayMotionData> {
    return this.http.get<EarlyDayMotionData>(this.baseUrl + 'parliament/earlydaymotions');
  }
}

interface EarlyDayMotionData {
    PagingInfo: PagingInfo;
    StatusCode: number;
    Success: boolean;
    Errors: any[]; 
    Response: EarlyDayMotion[];
}

interface EarlyDayMotion {
  Id: number;
  Status: number;
  StatusDate: string;
  MemberId: number;
  PrimarySponsor: PrimarySponsor;
  Title: string;
  MotionText: string;
  AmendmentToMotionId: number | null;
  UIN: number;
  AmendmentSuffix: null;
  DateTabled: string;
  PrayingAgainstNegativeStatutoryInstrumentId: null;
  StatutoryInstrumentNumber: null;
  StatutoryInstrumentYear: null;
  StatutoryInstrumentTitle: null;
  UINWithAmendmentSuffix: string;
  SponsorsCount: number;
}

interface PagingInfo {
    Skip: number;
    Take: number;
    Total: number;
    GlobalTotal: number;
    StatusCounts: any[];
    GlobalStatusCounts: any[];
}

interface PrimarySponsor {
    MnisId: number;
    PimsId: number;
    Name: string;
    ListAs: string;
    Constituency: string;
    Status: string;
    Party: string;
    PartyId: number;
    PartyColour: string;
    PhotoUrl: string;
}

