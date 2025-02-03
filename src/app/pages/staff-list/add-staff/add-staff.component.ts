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
    this.roles = this.staffService.roles;
    this.specializations = this.staffService.specializations;
  }

    // Add new role
    addRole() {
      if (this.newRole.trim()) {
        this.staffService.addRole(this.newRole.trim());
        this.newRole = ''; // Clear input field after adding
      }
      this.roles = this.staffService.roles;
    }
  
    // Delete role
    deleteRole(role: string) {
      this.roles = this.roles.filter(r => r !== role);
      this.staffService.deleteRole(role);
      this.roles = this.staffService.roles;
    }
  
    // Add new specialization
    addSpecialization() {
      if (this.newSpecialization.trim()) {
        this.staffService.addSpecialization(this.newSpecialization.trim());
        this.newSpecialization = '';
        this.specializations = this.staffService.specializations;
      }
    }
  
    // Delete specialization
    deleteSpecialization(specialization: string) {
      this.staffService.deleteSpecialization(specialization);
      this.specializations = this.staffService.specializations;
    }

  onCancel() {
    this.router.navigate(['/staff-list']);
  }

  onSave() {
    this.staffService.addStaff(this.newStaff);
    this.router.navigate(['/staff-list']);
  }
}
