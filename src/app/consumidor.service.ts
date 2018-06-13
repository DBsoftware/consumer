import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ConsumidorService {
  apiUrl = `http://localhost:3000/encuesta/`;
  constructor(private http: HttpClient) { }

  getVal(aux: string = '12345'): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${aux}`).pipe(
      map((data: any) =>  data.encuesta)
    );
  }

}
