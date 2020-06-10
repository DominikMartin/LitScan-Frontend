import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MetadataService {

  constructor(private httpClient: HttpClient) {
  }

  private metadata(uid: string): Observable<any> {
    return this.httpClient.get<any>('assets/data/' + uid + '/metadata.json');
  }

  public getMetadata(uid: string): Observable<any> {
    return this.metadata(uid);
  }
}
