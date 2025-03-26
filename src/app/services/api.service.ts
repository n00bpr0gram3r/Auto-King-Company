import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }),
    withCredentials: false
  };

  constructor(private http: HttpClient) { }

  submitBooking(formData: any): Observable<any> {
    console.log('Submitting booking to:', `${this.apiUrl}/booking.php`);
    console.log('Form data:', formData);
    
    return this.http.post(`${this.apiUrl}/booking.php`, formData, this.httpOptions).pipe(
      tap(response => {
        console.log('Booking submission response:', response);
      }),
      catchError(this.handleError)
    );
  }

  sendWhatsAppNotification(formData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/send-whatsapp`, formData, this.httpOptions);
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    console.error('API Error:', error);
    
    let errorMessage = 'An error occurred while submitting your booking.';
    
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = error.error.message;
    } else {
      // Server-side error
      if (error.error && typeof error.error === 'object') {
        errorMessage = error.error.message || error.error.error || errorMessage;
      } else if (typeof error.error === 'string') {
        try {
          const parsedError = JSON.parse(error.error);
          errorMessage = parsedError.message || parsedError.error || errorMessage;
        } catch (e) {
          errorMessage = error.error || errorMessage;
        }
      }
    }
    
    return throwError(() => new Error(errorMessage));
  }
} 