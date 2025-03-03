import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { MembershipService } from '../../../services/membership-service/membership.service';
import { Membership, MembershipCategory, MembershipInstallmentPlan } from '../../../models/memberships.model';
import { Observable } from 'rxjs';
import { LayoutService } from '../../../services/layout-service/layout.service';

@Component({
  selector: 'app-add-membership',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './add-membership.component.html',
  styleUrl: './add-membership.component.css'
})
export class AddMembershipComponent implements OnInit {

  constructor(private router: Router, private membershipService: MembershipService, private layoutService: LayoutService) { }

  categories$?: Observable<any>;
  installmentPlans$?: Observable<any>;
  sideBarVisible$?: Observable<boolean> = this.layoutService.sideBarVisibleObs$;

  newCategory = new MembershipCategory();
  newInstallmentPlan = new MembershipInstallmentPlan()
  newMembership = new Membership();

  selectedFile: File | null = null;

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
        this.newCategory.name = '';
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
        this.newInstallmentPlan.duration_type = '';
        this.newInstallmentPlan.duration_number = undefined;
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

  onSave() {
    this.newMembership.category = this.newCategory.name;
    this.newMembership.installment_plan = this.newInstallmentPlan.duration_number + " " + this.newInstallmentPlan.duration_type;

    const formData = new FormData();

    formData.append('name', this.newMembership.name);
    formData.append('category', this.newCategory.name);
    formData.append('period', this.newMembership.period);
    formData.append('limit_type', this.newMembership.limit_type);
    formData.append('amount', this.newMembership.amount.toString());
    formData.append('selected_class', this.newMembership.selected_class);
    formData.append('installment_plan', this.newInstallmentPlan.duration_number + " " + this.newInstallmentPlan.duration_type);
    formData.append('signup_fee', this.newMembership.signup_fee.toString());
    formData.append('description', this.newMembership.description);
  
    // Append image file if selected
    if (this.selectedFile) {
      formData.append('image', this.selectedFile, this.selectedFile.name);
    }

    this.membershipService.addMembership(formData).subscribe(
      data => {
        console.log('Membership added successfully:', data);
        this.router.navigate(['/membership-list']);
      },
      error => {
        console.error('Error adding membership:', error);
      }
    );
  }

  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }
}
