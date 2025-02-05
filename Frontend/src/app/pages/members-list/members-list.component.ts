import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MembershipService } from '../../services/membership-service/membership.service';
import { MembersService } from '../../services/members-service/members.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-members-list',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './members-list.component.html',
  styleUrl: './members-list.component.css'
})
export class MembersListComponent implements OnInit {
  members: any;

  constructor(private membersService: MembersService) { }

  ngOnInit() {
    this.members = this.membersService.members;
  }

  // Enable Edit Mode
  editMember(member: any) {
    member.editMode = true;
    member.originalData = { ...member }; // Backup original data
  }

  // Save Changes
  saveMember(member: any) {
    member.editMode = false;
  }

  // Cancel Edit
  cancelEdit(member: any) {
    Object.assign(member, member.originalData); // Restore original data
    member.editMode = false;
  }

  deleteMember(member: any) {
    const index = this.members.indexOf(member);
    if (index !== -1) {
      this.members.splice(index, 1);
    }
  }
}
