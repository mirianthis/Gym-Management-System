import { Component } from '@angular/core';
import { StaffService } from '../../services/staff-service/staff-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { Staff } from '../../models/staff.model';

@Component({
  selector: 'app-staff-list',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './staff-list.component.html',
  styleUrl: './staff-list.component.css'
})
export class StaffListComponent {

  staffData: any;

  staff$?: Observable<any>;
  roles$?: Observable<any>;

  constructor(private staffService: StaffService) { }

  ngOnInit() {
    this.staff$ = this.staffService.getStaffList();
    this.roles$ = this.staffService.getRoles();
  }

  // Enable Edit Mode
  editStaff(staff: any) {
    staff.editMode = true;
    staff.originalData = { ...staff }; // Backup original data
  }

  // Cancel Edit
  cancelEdit(staff: any) {
    Object.assign(staff, staff.originalData); // Restore original data
    staff.editMode = false;
  }

  // Save Changes
  saveStaff(staffId: number, staffData: any) {
    staffData.editMode = false;
    this.staffService.updateStaff(staffId, staffData).subscribe(
      response => {
        console.log('Staff updated successfully:', response);
        this.staff$ = this.staffService.getStaffList();
      },
      error => {
        console.error('Error updating staff:', error);
      }
    )
  }

  deleteStaff(staffId: number) {
    this.staffService.deleteStaff(staffId).subscribe(
      response => {
        console.log('Staff deleted successfully:', response);
        this.staff$ = this.staffService.getStaffList();
      },
      error => {
        console.error('Error deleting staff:', error);
      }
    );
  }
}
