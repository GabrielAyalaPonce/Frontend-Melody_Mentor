import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chord } from '../models/Chord';
import { throwError,tap,catchError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChordService {
  private apiUrl = 'http://localhost:8080/musical-chords'; // Cambia esta URL a la URL de tu API

  
  constructor(
    private http:HttpClient
  ) {
  }

  getChordsByType(type: string): Observable<Chord[]> {
    const url = `${this.apiUrl}?type=${encodeURIComponent(type)}`;
    console.log(`Fetching chords of type: ${type}`);
    return this.http.get<Chord[]>(url).pipe(
      tap(chords => console.log(`Received ${chords.length} chords of type ${type}`)),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error);
    return throwError('Something bad happened; please try again later.');
  }
}
