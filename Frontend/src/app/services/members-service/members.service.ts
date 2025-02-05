import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor() { }

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

  addMember(member: any) {
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
}
