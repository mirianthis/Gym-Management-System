import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { StaffService } from '../../../services/staff-service/staff-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Staff, StaffRole, StaffSpecialization } from '../../../models/staff.model';
import { error } from 'console';
import { LayoutService } from '../../../services/layout-service/layout.service';

@Component({
  selector: 'app-add-staff',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './add-staff.component.html',
  styleUrl: './add-staff.component.css'
})
export class AddStaffComponent {
  roles$?: Observable<any>;
  specializations$?: Observable<any>;
  sideBarVisible$?: Observable<boolean> = this.layoutService.sideBarVisibleObs$;

  newRole = new StaffRole();
  newSpecialization = new StaffSpecialization()
  newStaff = new Staff();


  constructor(private router: Router, private staffService: StaffService, private layoutService: LayoutService) { }


  ngOnInit(): void {
    this.roles$ = this.staffService.getRoles();
    this.specializations$ = this.staffService.getStaffSpecialization();
  }

  // Add new role
  addRole() {
    this.staffService.addRole(this.newRole).subscribe(
      response => {
        console.log('Role added successfully:', response);
        this.roles$ = this.staffService.getRoles();
        this.newRole.name = '';
      },
      error => {
        console.error('Error adding role:', error);
      }
    );
  }

  // Delete role
  deleteRole(id: number) {
    this.staffService.deleteRole(id).subscribe(
      response => {
        console.log('Role deleted successfully:', response);
        this.roles$ = this.staffService.getRoles();
      },
      error => {
        console.error('Error deleting Role:', error);
      }
    );
  }

  // Add new specialization
  addSpecialization() {
    this.staffService.addStaffSpecialization(this.newSpecialization).subscribe(
      response => {
        console.log('Specialization added successfully:', response);
        this.specializations$ = this.staffService.getStaffSpecialization();
        this.newSpecialization.name = '';
      },
      error => {
        console.error('Error adding specialization:', error);
      }
    );
  }

  // Delete specialization
  deleteSpecialization(id: number) {
    this.staffService.deleteStaffSpecialization(id).subscribe(
      response => {
        console.log('Specialization deleted successfully:', response);
        this.specializations$ = this.staffService.getStaffSpecialization();
      },
      error => {
        console.error('Error deleting specialization:', error);
      }
    );
  }

  onCancel() {
    this.router.navigate(['/staff-list']);
  }


  onSave() {
    this.newStaff.role = this.newRole.name;
    this.newStaff.specialization = this.newSpecialization.name;
    this.staffService.addStaff(this.newStaff).subscribe(data => {
      console.log('Staff added successfully:', data);
      this.router.navigate(['/staff-list']);
    },
      error => {
        console.error('Error adding staff:', error);
      }
    );
  }
}
