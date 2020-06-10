import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private httpClient: HttpClient) {
  }

  private history(uid: string): Observable<any> {
    return this.httpClient.get<any>('assets/data/' + uid + '/history.json');
  }

  public getHistory(uid: string): Observable<any> {
    return this.history(uid);
  }
}
