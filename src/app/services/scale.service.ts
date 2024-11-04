import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable,tap,catchError,throwError } from 'rxjs';
import { Scale } from '../models/scale';



@Injectable({
  providedIn: 'root'
})
export class ScaleService {
  private apiUrl = 'http://localhost:8080/musical-scales'; // Cambia esta URL a la URL de tu API

  constructor(private http: HttpClient) { }

  

  getAllScales(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  
  getScalesByType(type: string): Observable<Scale[]> {
    const url = `${this.apiUrl}?type=${encodeURIComponent(type)}`;
    console.log(`Fetching scales of type: ${type}`);
    return this.http.get<Scale[]>(url).pipe(
      tap(scales => console.log(`Received ${scales.length} scales of type ${type}`)),
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error);
    return throwError('Something bad happened; please try again later.');
  }
}
