import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddMemberComponent } from './add-member.component';
import { MembersService } from '../../../services/members-service/members.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { of, throwError } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Member } from '../../../models/members.model';

describe('AddMemberComponent', () => {
  let component: AddMemberComponent;
  let fixture: ComponentFixture<AddMemberComponent>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockMembersService: jasmine.SpyObj<MembersService>;

  beforeEach(async () => {
    // Create spy objects for dependencies
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockMembersService = jasmine.createSpyObj('MembersService', ['addMember']);

    await TestBed.configureTestingModule({
      imports: [AddMemberComponent, CommonModule, FormsModule],  // Import necessary modules and the component
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: MembersService, useValue: mockMembersService },
        { provide: ActivatedRoute, useValue: {} }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to add-membership on calling onAddMembership()', () => {
    component.onAddMembership();

    // Check if router navigated to '/add-membership'
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/add-membership']);
  });

  it('should navigate to members-list on calling onCancel()', () => {
    component.onCancel();

    // Check if router navigated to '/members-list'
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/members-list']);
  });

  it('should add a member and navigate to members-list on calling onSave() when the service succeeds', () => {
    const newMember = new Member({ first_name: 'John', email: 'johndoe@example.com' });
    component.newMember = newMember;

    // Mock successful response from addMember
    const mockResponse = { success: true, member: newMember };
    mockMembersService.addMember.and.returnValue(of(mockResponse));

    component.onSave();

    // Check if the addMember was called with the new member data
    expect(mockMembersService.addMember).toHaveBeenCalledWith(newMember);

    // Ensure that navigation to '/members-list' was triggered
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/members-list']);
  });

  it('should log an error and not navigate on calling onSave() when the service fails', () => {
    const newMember = new Member({ first_name: 'John', email: 'johndoe@example.com' });
    component.newMember = newMember;

    const mockError = { status: 500, message: 'Error adding member' };
    mockMembersService.addMember.and.returnValue(throwError(() => mockError));

    spyOn(console, 'error'); // Spy on the console.error method to check for error logging

    component.onSave();

    // Ensure the addMember method was called
    expect(mockMembersService.addMember).toHaveBeenCalledWith(newMember);

    // Check if an error was logged
    expect(console.error).toHaveBeenCalledWith('Error adding member:', mockError);

    // Ensure navigation to '/members-list' was NOT called since the save failed
    expect(mockRouter.navigate).not.toHaveBeenCalledWith(['/members-list']);
  });
});
