import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MembershipListComponent } from './membership-list.component';
import { MembershipService } from '../../services/membership-service/membership.service';
import { BehaviorSubject, of, throwError } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

describe('MembershipListComponent', () => {
  let component: MembershipListComponent;
  let fixture: ComponentFixture<MembershipListComponent>;
  let mockMembershipService: jasmine.SpyObj<MembershipService>;

  beforeEach(async () => {
    // Create spy objects for dependencies
    mockMembershipService = jasmine.createSpyObj('MembershipService', ['getMembershipsList', 'getInstallmentPlans', 'updateMembership', 'deleteMembership']);

    await TestBed.configureTestingModule({
      imports: [MembershipListComponent, CommonModule, FormsModule, RouterLink], // Import necessary modules
      providers: [
        { provide: MembershipService, useValue: mockMembershipService },
        { provide: ActivatedRoute, useValue: {} }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembershipListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch memberships and installment plans on ngOnInit()', () => {
    const mockMemberships = [{ id: 1, name: 'Basic Membership' }];
    const mockInstallmentPlans = [{ id: 1, plan: '3 months' }];
    
    mockMembershipService.getMembershipsList.and.returnValue(of(mockMemberships));
    mockMembershipService.getInstallmentPlans.and.returnValue(of(mockInstallmentPlans));

    component.ngOnInit();

    expect(mockMembershipService.getMembershipsList).toHaveBeenCalled();
    expect(mockMembershipService.getInstallmentPlans).toHaveBeenCalled();
    expect(component.memberships$).toBeDefined();
    expect(component.installmentPlans$).toBeDefined();
  });

  it('should enable edit mode for a membership', () => {
    const membership = { id: 1, name: 'Basic Membership', editMode: false };
    component.editMembership(membership);

    expect(membership.editMode).toBeTrue();
  });

  it('should handle errors when saving a membership', () => {
    const membership = { id: 1, name: 'Basic Membership', editMode: true };
    const updatedMembership = { id: 1, name: 'Updated Membership', editMode: false };

    const mockError = { status: 500, message: 'Error updating membership' };
    mockMembershipService.updateMembership.and.returnValue(throwError(() => mockError));

    spyOn(console, 'error'); // Spy on the console.error method to check for error logging

    component.saveMembership(membership.id, updatedMembership);

    expect(mockMembershipService.updateMembership).toHaveBeenCalledWith(membership.id, updatedMembership);
    expect(console.error).toHaveBeenCalledWith('Error updating membership:', mockError);
  });

  it('should cancel editing a membership and restore original data', () => {
    const membership = { id: 1, name: 'Basic Membership', editMode: true, originalData: { id: 1, name: 'Original Name' } };
    
    component.cancelEdit(membership);

    expect(membership.editMode).toBeFalse();
    expect(membership.name).toBe('Original Name');
  });  

  it('should handle errors when deleting a membership', () => {
    const membershipId = 1;
    const mockError = { status: 500, message: 'Error deleting membership' };
    mockMembershipService.deleteMembership.and.returnValue(throwError(() => mockError));

    spyOn(console, 'error'); // Spy on the console.error method to check for error logging

    component.deleteMembership(membershipId);

    expect(mockMembershipService.deleteMembership).toHaveBeenCalledWith(membershipId);
    expect(console.error).toHaveBeenCalledWith('Error deleting membership:', mockError);
  });
});
