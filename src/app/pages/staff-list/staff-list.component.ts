import { Component } from '@angular/core';
import { StaffService } from '../../services/staff-service/staff-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-staff-list',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './staff-list.component.html',
  styleUrl: './staff-list.component.css'
})
export class StaffListComponent {
  staff: any;

  constructor(private staffService: StaffService) { }

  ngOnInit() {
    this.staff = this.staffService.staff;
  }

  // Enable Edit Mode
  editStaff(staff: any) {
    staff.editMode = true;
    staff.originalData = { ...staff }; // Backup original data
  }

  // Save Changes
  saveStaff(staff: any) {
    staff.editMode = false;
  }

  // Cancel Edit
  cancelEdit(staff: any) {
    Object.assign(staff, staff.originalData); // Restore original data
    staff.editMode = false;
  }

  deleteStaff(staff: any) {
    const index = this.staff.indexOf(staff);
    if (index !== -1) {
      this.staff.splice(index, 1);
    }
  }
}
