import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { StaffService } from '../../../services/staff-service/staff-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-staff',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './add-staff.component.html',
  styleUrl: './add-staff.component.css'
})
export class AddStaffComponent {
  newRole: string = ''; 
  roles: string[] = [''];
  
  newSpecialization: string = ''; 
  specializations: string[] = ['']; 

  constructor(private router: Router, private staffService: StaffService) {

  }

  newStaff = {
    name: '',
    role: '',
    email: '',
    mobile: '' 
  };

  ngOnInit(): void {

  }

    // Add new role
    addRole() {

    }
  
    // Delete role
    deleteRole(role: string) {

    }
  
    // Add new specialization
    addSpecialization() {

    }
  
    // Delete specialization
    deleteSpecialization(specialization: string) {

    }

  onCancel() {
    this.router.navigate(['/staff-list']);
  }

  onSave() {
    this.staffService.addStaff(this.newStaff);
    this.router.navigate(['/staff-list']);
  }
}
