import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MembersService } from '../../../services/members-service/members.service';

@Component({
  selector: 'app-add-member',
  standalone: true,
  imports: [],
  templateUrl: './add-member.component.html',
  styleUrl: './add-member.component.css'
})
export class AddMemberComponent implements OnInit{

  constructor(private router: Router, private membersService: MembersService) {
  
    }

  newMember = {
    name: '',
    joiningDate: '',
    expireDate: '',
    status: 'Pending' // Default status
  };

  ngOnInit(): void {
    
  }

  onAddMembership() {
    this.router.navigate(['/add-membership']);
  }


  onCancel() {
    this.router.navigate(['/members-list']);
  }

  onSave() {
    this.membersService.addMember(this.newMember);
    this.router.navigate(['/members-list']);
  }
}
