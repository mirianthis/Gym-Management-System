import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = 'http://127.0.0.1:8000/api/authentication/'; // Change if using a different backend URL

  private _username?: string;

  constructor(private http: HttpClient) {}

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}register/`, user);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}login/`, credentials);
  }

  logout(refreshToken: string): Observable<any> {
    return this.http.post(`${this.apiUrl}logout/`, { refresh: refreshToken });
  }

  get username(): string {
    return this.username;
  }
  
  set username(value: string) {
    this.username = value;
  }
}
