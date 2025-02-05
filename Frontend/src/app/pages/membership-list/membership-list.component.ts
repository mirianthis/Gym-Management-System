import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MembershipService } from '../../services/membership-service/membership.service';

@Component({
  selector: 'app-membership-list',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './membership-list.component.html',
  styleUrl: './membership-list.component.css'
})
export class MembershipListComponent implements OnInit{

  constructor(private membershipService: MembershipService) {

  }
  memberships: any;
  
  ngOnInit(): void {
    this.memberships = this.membershipService.memberships;
  }

  // Enable Edit Mode
  editMembership(membership: any) {
    membership.editMode = true;
    membership.originalData = { ...membership }; // Backup original data
  }

  // Save Changes
  saveMembership(membership: any) {
    membership.editMode = false;
  }

  // Cancel Edit
  cancelEdit(membership: any) {
    Object.assign(membership, membership.originalData); // Restore original data
    membership.editMode = false;
  }

  deleteMembership(membership: any) {
    const index = this.memberships.indexOf(membership);
    if (index !== -1) {
      this.memberships.splice(index, 1);
    }
  }
  
}
