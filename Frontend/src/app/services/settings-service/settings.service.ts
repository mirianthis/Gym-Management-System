import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private http: HttpClient) { }
    
      private settingsUrl = 'http://127.0.0.1:8000/api/settings/settings/';    
      private checkSettingsUrl = 'http://127.0.0.1:8000/api/settings/check/';    
    
      getSettings(): Observable<any> {
        return this.http.get(this.settingsUrl);
      }

      getCheckSettings(): Observable<any> {
        return this.http.get(this.checkSettingsUrl);
      }
    
      addSettings(settingsData: any): Observable<any> {
        return this.http.post(this.settingsUrl, settingsData);
      }
    
      updateSettings(id: number, settingsData: any): Observable<any> {
        return this.http.put(`${this.settingsUrl}${id}/`, settingsData);
      }
}
