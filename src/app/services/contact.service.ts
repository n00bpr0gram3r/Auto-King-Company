import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service?: string;
  message?: string;
  timestamp: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // Combined function to handle form submission
  submitContactForm(data: ContactFormData): Observable<any> {
    // Add timestamp
    const formData = {
      ...data,
      timestamp: new Date().toISOString()
    };

    // Send to PHP backend
    return this.http.post(`${this.apiUrl}/contact-handler.php`, formData);
  }
} 