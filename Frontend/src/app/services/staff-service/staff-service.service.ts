import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StaffRole, StaffSpecialization } from '../../models/staff.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

    constructor(private http: HttpClient) { }
  
    private staffUrl = 'http://127.0.0.1:8000/api/staff/staff/';
    private staffListUrl = 'http://127.0.0.1:8000/api/staff-list/';
    private rolesUrl = 'http://127.0.0.1:8000/api/staff/roles/';
    private specializationsUrl = 'http://127.0.0.1:8000/api/staff/specialization/';
  
  
    getStaff(): Observable<any> {
      return this.http.get(this.staffUrl);
    }
  
    getStaffList(): Observable<any> {
      return this.http.get(this.staffListUrl);
    }
  
    getStaffById(id: number): Observable<any> {
      return this.http.get(`${this.staffUrl}${id}/`);
    }
  
    addStaff(staffData: any): Observable<any> {
      return this.http.post(this.staffUrl, staffData);
    }
  
    updateStaff(id: number, staffData: any): Observable<any> {
      return this.http.put(`${this.staffUrl}${id}/`, staffData);
    }
  
    deleteStaff(id: number): Observable<any> {
      return this.http.delete(`${this.staffUrl}${id}/`);
    }
    
    getRoles(): Observable<any> {
      return this.http.get(this.rolesUrl);
    }
    
    addRole(roleData: StaffRole): Observable<any> {
      return this.http.post(this.rolesUrl, roleData);
    }
    
    deleteCategory(id: number): Observable<any> {
      return this.http.delete(`${this.rolesUrl}${id}/`);
    }
  
    getStaffSpecialization(): Observable<any> {
      return this.http.get(this.specializationsUrl);
    }
    
    addStaffSpecialization(specializationData: StaffSpecialization): Observable<any> {
      return this.http.post(this.specializationsUrl, specializationData);
    }
    
    deleteStaffSpecialization(id: number): Observable<any> {
      return this.http.delete(`${this.specializationsUrl}${id}/`);
    }  
}
