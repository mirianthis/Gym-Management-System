import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MembershipService {

  constructor() { }

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

  addCategory(category: string) {
    this.categories.push(category);
  }

  addInstallmentPlan(installmentPlan: string) {
    this.installmentPlans.push(installmentPlan);
  }

  deleteCategory(category: string) {
    this.categories = this.categories.filter(c => c !== category);
  }

  deleteInstallmentPlan(plan: string) {
    this.installmentPlans = this.installmentPlans.filter(p => p !== plan);
  }

  addMembership(membership: any) {
    this.memberships.push({
      id: this.memberships.length + 1, // Auto-increment ID
      icon: membership.icon || 'fa fa-users', // Default icon
      name: membership.name,
      period: membership.period,
      plan: membership.plan,
      fee: membership.fee,
      editMode: false,
      originalData: {}
    });
  }
  
}
