import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { MembershipService } from '../../../services/membership-service/membership.service';
import { Membership, MembershipCategory, MembershipInstallmentPlan } from '../../../models/memberships.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-membership',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './add-membership.component.html',
  styleUrl: './add-membership.component.css'
})
export class AddMembershipComponent implements OnInit {

  constructor(private router: Router, private membershipService: MembershipService) { }

  categories$?: Observable<any>;
  installmentPlans$?: Observable<any>;

  newCategory = new MembershipCategory();
  newInstallmentPlan = new MembershipInstallmentPlan()
  newMembership = new Membership();

  ngOnInit(): void {
    this.categories$ = this.membershipService.getCategories();
    this.installmentPlans$ = this.membershipService.getInstallmentPlans();
  }

  // Add new category
  addCategory() {
    this.membershipService.addCategory(this.newCategory).subscribe(
      response => {
        console.log('Category added successfully:', response);
        this.categories$ = this.membershipService.getCategories();
      },
      error => {
        console.error('Error adding category:', error);
      }
    );
  }

  // Delete category
  deleteCategory(id: number) {
    this.membershipService.deleteCategory(id).subscribe(
      response => {
        console.log('Member deleted successfully:', response);
        this.categories$ = this.membershipService.getCategories();
      },
      error => {
        console.error('Error deleting member:', error);
      }
    );
  }

  // Add new installment plan
  addInstallmentPlan() {
    this.membershipService.addInstallmentPlan(this.newInstallmentPlan).subscribe(
      response => {
        console.log('Installment plan added successfully:', response);
        this.installmentPlans$ = this.membershipService.getInstallmentPlans();
      },
      error => {
        console.error('Error adding installment plan:', error);
      }
    );
  }

  // Delete installment plan
  deleteInstallmentPlan(id: number) {
    this.membershipService.deleteInstallmentPlan(id).subscribe(
      response => {
        console.log('Installment plan deleted successfully:', response);
        this.installmentPlans$ = this.membershipService.getInstallmentPlans();
      },
      error => {
        console.error('Error deleting installment plan:', error);
      }
    );
  }

  onCancel() {
    this.router.navigate(['/membership-list']);
  }

  async onSave() {
    try {
      this.newMembership.category = this.newCategory.id;
      this.newMembership.installment_plan = this.newInstallmentPlan.id;
      const response = await this.membershipService.addMembership(this.newMembership);
      console.log('Membership added successfully:', response);
      this.router.navigate(['/membership-list']);
    } catch (error) {
      console.error('Error adding membership:', error);
    }
  }
}
