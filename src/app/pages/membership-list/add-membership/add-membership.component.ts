import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { MembershipService } from '../../../services/membership-service/membership.service';

@Component({
  selector: 'app-add-membership',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './add-membership.component.html',
  styleUrl: './add-membership.component.css'
})
export class AddMembershipComponent implements OnInit{

  constructor(private router: Router, private membershipService: MembershipService) {

  }
  newCategory: string = ''; // Stores input value
  categories: string[] = ['']; // Initial categories
  
  newInstallmentDuration: string = ''; // Stores the entered duration
  selectedInstallmentType: string = ''; // Stores selected duration type
  installmentPlans: string[] = ['']; // Initial installment plans

  newMembership = {
    name: '',
    period: '',
    plan: '',
    fee: ''
  };
  
  ngOnInit(): void {
    this.categories = this.membershipService.categories;
    this.installmentPlans = this.membershipService.installmentPlans;
  }

  // Add new category
  addCategory() {
    if (this.newCategory.trim()) {
      this.membershipService.addCategory(this.newCategory.trim());
      this.newCategory = ''; // Clear input field after adding
    }
    this.categories = this.membershipService.categories;
  }

  // Delete category
  deleteCategory(category: string) {
    this.categories = this.categories.filter(c => c !== category);
    this.membershipService.deleteCategory(category);
    this.categories = this.membershipService.categories;
  }

  // Add new installment plan
  addInstallmentPlan() {
    if (this.newInstallmentDuration.trim() && this.selectedInstallmentType) {
      const newPlan = `${this.newInstallmentDuration} ${this.selectedInstallmentType}`;
      this.membershipService.addInstallmentPlan(newPlan);
      this.newInstallmentDuration = ''; // Clear input field
      this.selectedInstallmentType = ''; // Reset selection
      this.installmentPlans = this.membershipService.installmentPlans;
    }
  }

  // Delete installment plan
  deleteInstallmentPlan(plan: string) {
    this.membershipService.deleteInstallmentPlan(plan);
    this.installmentPlans = this.membershipService.installmentPlans;
  }

  onCancel() {
    this.router.navigate(['/membership-list']);
  }

  onSave() {
    this.membershipService.addMembership(this.newMembership);
    this.router.navigate(['/membership-list']);
  }
}
