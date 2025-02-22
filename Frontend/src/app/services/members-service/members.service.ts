import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, firstValueFrom, lastValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor(private http: HttpClient) { }

  private memberUrl = 'http://127.0.0.1:8000/api/members/members/';
  private memberListUrl = 'http://127.0.0.1:8000/api/members-list/';



  deleteCategory(member: string) {
    // this.members = this.members.filter(m => m !== member);
  }

  // Get all members
  getMembers(): Observable<any> {
    return this.http.get(this.memberUrl);
  }

  getMembersList(): Observable<any> {
    return this.http.get(this.memberListUrl);
  }

  // Get a single member by ID
  getMemberById(id: number): Observable<any> {
    return this.http.get(`${this.memberUrl}${id}/`);
  }

  // Add a new member
  addMember(memberData: any): Observable<any> {
    return this.http.post(this.memberUrl, memberData);
  }

  // Update a member
  updateMember(id: number, memberData: any): Observable<any> {
    return this.http.put(`${this.memberUrl}${id}/`, memberData);
  }

  // Delete a member
  deleteMember(id: number): Observable<any> {
    return this.http.delete(`${this.memberUrl}${id}/`);
  }

}
