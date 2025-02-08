import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MembersService } from '../../../services/members-service/members.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-member',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './add-member.component.html',
  styleUrl: './add-member.component.css'
})
export class AddMemberComponent implements OnInit{

  constructor(private router: Router, private membersService: MembersService) {
  
    }

  newMember = {
    first_name: '',
    last_name: '',
    dob: '',
    address: '',
    city: '',
    zip_code: '',
    mobile_number: '',
    email: '',
    username: '',
    password: '',
    inquiry_date: '',
    trial_end_date: '',
    membership_type: '',
    class_choice: '',
    membership_status: '',
    first_payment_date: '',
  };

  ngOnInit(): void {
    
  }

  onAddMembership() {
    this.router.navigate(['/add-membership']);
  }


  onCancel() {
    this.router.navigate(['/members-list']);
  }

  async onSave() {
    try {
      const response = await this.membersService.addMember(this.newMember);
      console.log('Member added successfully:', response);
      this.router.navigate(['/members-list']);
    } catch (error) {
      console.error('Error adding member:', error);
    }
  }
}
