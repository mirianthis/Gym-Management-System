import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MembersListComponent } from './members-list.component';
import { MembersService } from '../../services/members-service/members.service';
import { of, throwError } from 'rxjs';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

describe('MembersListComponent', () => {
  let component: MembersListComponent;
  let fixture: ComponentFixture<MembersListComponent>;
  let mockMembersService: jasmine.SpyObj<MembersService>;

  beforeEach(async () => {
    // Create spy object for MembersService
    mockMembersService = jasmine.createSpyObj('MembersService', ['getMembers', 'updateMember', 'deleteMember']);

    await TestBed.configureTestingModule({
      imports: [MembersListComponent, CommonModule, FormsModule],  // Import necessary modules and the component
      providers: [
        { provide: MembersService, useValue: mockMembersService },
        { provide: ActivatedRoute, useValue: {} }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should fetch members on init', () => {
    // Mock the response of getMembers
    const mockMembers = [{ id: 1, name: 'John Doe', editMode: false }];
    mockMembersService.getMembers.and.returnValue(of(mockMembers));

    // Trigger ngOnInit
    component.ngOnInit();

    // Assert that the members$ observable was set with the mock data
    component.members$?.subscribe(members => {
      expect(members).toEqual(mockMembers);
    });
  });

  it('should enable edit mode for a member', () => {
    const member = { id: 1, name: 'John Doe', editMode: false };

    component.editMember(member);

    expect(member.editMode).toBe(true);
    // expect(member.originalData).toEqual({ ...member });
  });

  it('should save member changes and update the members list', () => {
    const mockResponse = { success: true };
    const memberData = { id: 1, name: 'Updated Name', editMode: false };

    mockMembersService.updateMember.and.returnValue(of(mockResponse));
    mockMembersService.getMembers.and.returnValue(of([{ id: 1, name: 'Updated Name', editMode: false }]));

    // Call the saveMember method
    component.saveMember(1, memberData);

    // Assert the updateMember was called
    expect(mockMembersService.updateMember).toHaveBeenCalledWith(1, memberData);
    // Assert the members list is updated
    component.members$?.subscribe(members => {
      expect(members[0].name).toBe('Updated Name');
    });
  });

  it('should handle error when saving member', () => {
    const memberData = { id: 1, name: 'Updated Name', editMode: false };
    const mockError = { status: 500, message: 'Error updating member' };

    mockMembersService.updateMember.and.returnValue(throwError(() => mockError));

    spyOn(console, 'error'); // To spy on error logs

    component.saveMember(1, memberData);

    expect(console.error).toHaveBeenCalledWith('Error updating member:', mockError);
  });

  it('should cancel edit and restore original data', () => {
    const member = { id: 1, name: 'John Doe', editMode: true, originalData: { id: 1, name: 'John Doe' } };

    component.cancelEdit(member);

    expect(member.name).toBe('John Doe'); // Should be restored to original data
    expect(member.editMode).toBe(false);
  });

  it('should delete a member and update the list', () => {
    const mockResponse = { success: true };
    mockMembersService.deleteMember.and.returnValue(of(mockResponse));
    mockMembersService.getMembers.and.returnValue(of([])); // No members left after deletion

    const memberId = 1;
    component.deleteMember(memberId);

    expect(mockMembersService.deleteMember).toHaveBeenCalledWith(memberId);
    component.members$?.subscribe(members => {
      expect(members.length).toBe(0); // Members list should be empty after deletion
    });
  });

  it('should handle error when deleting a member', () => {
    const mockError = { status: 500, message: 'Error deleting member' };
    spyOn(console, 'error');

    mockMembersService.deleteMember.and.returnValue(throwError(() => mockError));

    component.deleteMember(1);

    expect(console.error).toHaveBeenCalledWith('Error deleting member:', mockError);
  });
});
