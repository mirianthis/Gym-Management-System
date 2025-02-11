import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { MembershipCategory, MembershipInstallmentPlan } from '../../models/memberships.model';

@Injectable({
  providedIn: 'root'
})
export class MembershipService {

  constructor(private http: HttpClient) { }

  private membershipsUrl = 'http://127.0.0.1:8000/api/membershis/';
  private membershipListUrl = 'http://127.0.0.1:8000/api/members-list/';
  private categoriesUrl = 'http://127.0.0.1:8000/api/categories/';
  private installmentPlansUrl = 'http://127.0.0.1:8000/api/installments/';

  categories: string[] = ['Regular', 'Limited', 'Total Gym Exercises for Abs', 'Total Gym Exercises for Legs', 'Total Gym Exercises for Biceps', 'Exercise'];
  installmentPlans: string[] = ['1 Year', '6 Months', '3 Months']; 
  memberships = [
    {
      id: 1,
      icon: 'fa fa-trophy',
      name: 'Gold Membership',
      period: 300,
      plan: '1 month',
      fee: '$5',
      editMode: false,
      originalData: {} // Store original data in case of cancel
    },
    {
      id: 2,
      icon: 'fa fa-handshake',
      name: 'Platinum Membership',
      period: 360,
      plan: '1 month',
      fee: '$5',
      editMode: false,
      originalData: {}
    },
    {
      id: 3,
      icon: 'fa fa-award',
      name: 'Silver Membership',
      period: 180,
      plan: '1 week',
      fee: '$5',
      editMode: false,
      originalData: {}
    },
    {
      id: 4,
      icon: 'fa fa-users',
      name: 'Regular Membership',
      period: 100,
      plan: '1 week',
      fee: '$5',
      editMode: false,
      originalData: {}
    }
  ];

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
