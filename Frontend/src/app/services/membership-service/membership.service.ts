import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, map, Observable } from 'rxjs';
import { MembershipCategory, MembershipInstallmentPlan } from '../../models/memberships.model';

@Injectable({
  providedIn: 'root'
})
export class MembershipService {

  constructor(private http: HttpClient) { }

  private membershipsUrl = 'http://127.0.0.1:8000/api/membership/memberships/';
  private membershipListUrl = 'http://127.0.0.1:8000/api/members-list/';
  private categoriesUrl = 'http://127.0.0.1:8000/api/membership/categories/';
  private installmentPlansUrl = 'http://127.0.0.1:8000/api/membership/installments/';


  getMemberships(): Observable<any> {
    return this.http.get(this.membershipsUrl);
  }

  getMembershipsList(): Observable<any> {
    return this.http.get(this.membershipListUrl);
  }

  getMembershipById(id: number): Observable<any> {
    return this.http.get(`${this.membershipsUrl}${id}/`);
  }

  async addMembership(membershipData: any): Promise<any> {
    return firstValueFrom(this.http.post(this.membershipsUrl, membershipData));
  }

  updateMembership(id: number, membershipData: any): Observable<any> {
    return this.http.put(`${this.membershipsUrl}${id}/`, membershipData);
  }

  deleteMembership(id: number): Observable<any> {
    return this.http.delete(`${this.membershipsUrl}${id}/`);
  }
  
  getCategories(): Observable<any> {
    return this.http.get(this.categoriesUrl);
  }
  
  addCategory(categoryData: MembershipCategory): Observable<any> {
    return this.http.post(this.categoriesUrl, categoryData);
  }
  
  deleteCategory(id: number): Observable<any> {
    return this.http.delete(`${this.categoriesUrl}${id}/`);
  }

  getInstallmentPlans(): Observable<any> {
    return this.http.get(this.installmentPlansUrl);
  }
  
  addInstallmentPlan(installmentPlan: MembershipInstallmentPlan): Observable<any> {
    return this.http.post(this.installmentPlansUrl, installmentPlan);
  }
  
  deleteInstallmentPlan(id: number): Observable<any> {
    return this.http.delete(`${this.installmentPlansUrl}${id}/`);
  }  
  
}
