import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  link$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(
    private http: HttpClient
  ) { }

  getShortLink(url: any) {
    this.http.get(environment.apiURL + '?url=' + url).subscribe(res => {
      this.link$.next(res);
    });
  }
}