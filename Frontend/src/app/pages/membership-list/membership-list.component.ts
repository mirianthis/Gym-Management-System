import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MembershipService } from '../../services/membership-service/membership.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-membership-list',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './membership-list.component.html',
  styleUrl: './membership-list.component.css'
})
export class MembershipListComponent implements OnInit {

  installmentPlanData: any;

  memberships$?: Observable<any>;
  installmentPlans$?: Observable<any>;

  constructor(private membershipService: MembershipService) { }

  ngOnInit(): void {
    this.memberships$ = this.membershipService.getMemberships();
    this.installmentPlans$ = this.membershipService.getInstallmentPlans();
  }

  // Enable Edit Mode
  editMembership(membership: any) {
    membership.editMode = true;
    membership.originalData = { ...membership }; // Backup original data
  }

  // Save Changes
  saveMembership(membershipId: any, membershipData: any) {
    membershipData.editMode = false;
    this.membershipService.updateMembership(membershipId, membershipData).subscribe(
      response => {
        console.log('Membership updated successfully:', response);
        this.memberships$ = this.membershipService.getMemberships();
      },
      error => {
        console.error('Error updating membership:', error);
      }
    )
  }

  // Cancel Edit
  cancelEdit(membership: any) {
    Object.assign(membership, membership.originalData); // Restore original data
    membership.editMode = false;
  }

  deleteMembership(membershipId: any) {
    this.membershipService.deleteMembership(membershipId).subscribe(
      response => {
        console.log('Membership deleted successfully:', response);
        this.memberships$ = this.membershipService.getMemberships();
      },
      error => {
        console.error('Error deleting membership:', error);
      }
    );
  }

  getInstallmentPlanData(installmentPlanId: number) {
    if (installmentPlanId === 1) {
      return '1 day'
    } else if (installmentPlanId === 2) {
      return '1 week'
    }
    else if (installmentPlanId === 3) {
      return '1 month'
    }
    else if (installmentPlanId === 4) {
      return '1 year'
    } else {
      return;
    }
  }




}
