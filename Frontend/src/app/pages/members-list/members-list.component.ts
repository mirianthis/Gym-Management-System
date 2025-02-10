import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MembersService } from '../../services/members-service/members.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Member } from '../../models/members.model';
import { response } from 'express';

@Component({
  selector: 'app-members-list',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './members-list.component.html',
  styleUrl: './members-list.component.css'
})
export class MembersListComponent implements OnInit {
  members$?: Observable<any>;

  constructor(private membersService: MembersService) { }

  ngOnInit() {
    this.members$ = this.membersService.getMembers();
  }

  // Enable Edit Mode
  editMember(member: any) {
    member.editMode = true;
    member.originalData = { ...member }; // Backup original data
  }

  // Save Changes
  saveMember(memberId: number, memberData: any) {
    memberData.editMode = false;
    this.membersService.updateMember(memberId, memberData).subscribe(
      response => {
        console.log('Member updated successfully:', response);
        this.members$ = this.membersService.getMembers();
      },
      error => {
        console.error('Error updating member:', error);
      }
    )
  }

  // Cancel Edit
  cancelEdit(member: any) {
    Object.assign(member, member.originalData); // Restore original data
    member.editMode = false;
  }

  deleteMember(memberId: number) {
    this.membersService.deleteMember(memberId).subscribe(
      response => {
        console.log('Member deleted successfully:', response);
        this.members$ = this.membersService.getMembers();
      },
      error => {
        console.error('Error deleting member:', error);
      }
    );
  }
  
}

