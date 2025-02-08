import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://127.0.0.1:8000/api/members/';

  members = [
    {
      id: 'M1',
      name: 'Mark Klop',
      joiningDate: '28/12/2024',
      expireDate: '28/03/2025',
      status: 'Active',
      editMode: false,
      originalData: {} // Store original data in case of cancel
    },
    {
      id: 'M2',
      name: 'Alex Deo',
      joiningDate: '23/02/2024',
      expireDate: '38/05/2024',
      status: 'Active',
      editMode: false,
      originalData: {} // Store original data in case of cancel
    },
    {
      id: 'M3',
      name: 'Joe Manzer',
      joiningDate: '03/05/2024',
      expireDate: '03/06/2024',
      status: 'Inactive',
      editMode: false,
      originalData: {} // Store original data in case of cancel
    }
  ];

  deleteCategory(member: string) {
    // this.members = this.members.filter(m => m !== member);
  }

  addMemberTest(member: any) {
    this.members.push({
      id: `M${this.members.length + 1}`, // Auto-generate member ID
      name: member.name,
      joiningDate: member.joiningDate,
      expireDate: member.expireDate,
      status: member.status,
      editMode: false,
      originalData: {}
    });
  }

    // Get all members
    getMembers(): Observable<any> {
      return this.http.get(this.apiUrl);
    }
  
    // Get a single member by ID
    getMemberById(id: number): Observable<any> {
      return this.http.get(`${this.apiUrl}${id}/`);
    }
  
    // Add a new member
    async addMember(memberData: any): Promise<any> {
      return firstValueFrom(this.http.post(this.apiUrl, memberData));
    }
  
    // Update a member
    updateMember(id: number, memberData: any): Observable<any> {
      return this.http.put(`${this.apiUrl}${id}/`, memberData);
    }
  
    // Delete a member
    deleteMember(id: number): Observable<any> {
      return this.http.delete(`${this.apiUrl}${id}/`);
    }
}
