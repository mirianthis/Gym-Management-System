import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MembersService } from '../../../services/members-service/members.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Member } from '../../../models/members.model';

@Component({
  selector: 'app-add-member',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './add-member.component.html',
  styleUrl: './add-member.component.css'
})
export class AddMemberComponent implements OnInit {

  constructor(private router: Router, private membersService: MembersService) {

  }

  newMember = new Member({});

  ngOnInit(): void {

  }

  onAddMembership() {
    this.router.navigate(['/add-membership']);
  }


  onCancel() {
    this.router.navigate(['/members-list']);
  }

  onSave() {

    this.membersService.addMember(this.newMember).subscribe(response => {
      console.log('Member added successfully:', response);
      this.router.navigate(['/members-list']);

    },
      err => {
        console.error('Error adding member:', err);
      });
  }
}
