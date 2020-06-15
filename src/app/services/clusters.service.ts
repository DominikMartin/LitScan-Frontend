import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClustersService {

  constructor(private httpClient: HttpClient) {
  }

  private clusters(uid: string): Observable<any> {
    return this.httpClient.get<any>('assets/data/' + uid + '/clusters.json');
  }

  public getClusters(uid: string): Observable<any> {
    return this.clusters(uid);
  }
}
