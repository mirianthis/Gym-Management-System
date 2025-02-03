import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor() { }

  roles: string[] = ['Warm Up', 'Exercise', 'Yoga'];
  specializations: string[] = ['Yoga', 'Aerobics']; 

  staff = [
    {
      name: 'Jenifer D',
      role: 'Exercise',
      email: 'jenifer@gmail.com',
      mobile: '99884576',
      editMode: false,
      originalData: {} // Store original data in case of cancel
    },
    {
      name: 'Joseph Bratt',
      role: 'Yoga',
      email: 'joseph@gmail.com',
      mobile: '97824355',
      editMode: false,
      originalData: {} // Store original data in case of cancel
    },
    {
      name: 'Sergio Drake',
      role: 'Yoga',
      email: 'sergio@gmail.com',
      mobile: '99878603',
      editMode: false,
      originalData: {} // Store original data in case of cancel
    },

  ];

  addStaff(staff: any) {
    this.staff.push({
      name: staff.name,
      role: staff.role,
      email: staff.email,
      mobile: staff.mobile,
      editMode: false,
      originalData: {}
    });
  }

  addRole(role: string) {
    this.roles.push(role);
  }

  addSpecialization(specialization: string) {
    this.specializations.push(specialization);
  }

  deleteRole(role: string) {
    this.roles = this.roles.filter(r => r !== role);
  }

  deleteSpecialization(specialization: string) {
    this.specializations = this.specializations.filter(s => s !== specialization);
  }
}
