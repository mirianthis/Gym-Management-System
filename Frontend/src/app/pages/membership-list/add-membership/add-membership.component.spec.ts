import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { AddMembershipComponent } from './add-membership.component';
import { MembershipService } from '../../../services/membership-service/membership.service';
import { LayoutService } from '../../../services/layout-service/layout.service';
import { of, throwError } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MembershipCategory, MembershipInstallmentPlan, Membership } from '../../../models/memberships.model';

describe('AddMembershipComponent', () => {
  let component: AddMembershipComponent;
  let fixture: ComponentFixture<AddMembershipComponent>;
  let mockMembershipService: jasmine.SpyObj<MembershipService>;
  let mockLayoutService: jasmine.SpyObj<LayoutService>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    mockMembershipService = jasmine.createSpyObj('MembershipService', [
      'getCategories',
      'getInstallmentPlans',
      'addCategory',
      'addInstallmentPlan',
      'addMembership',
      'deleteCategory',
      'deleteInstallmentPlan'
    ]);

    mockLayoutService = jasmine.createSpyObj('LayoutService', ['sideBarVisibleObs$']);
    mockLayoutService.sideBarVisibleObs$ = of(true);
  
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [AddMembershipComponent, FormsModule, CommonModule, RouterLink],
      providers: [
        { provide: MembershipService, useValue: mockMembershipService },
        { provide: LayoutService, useValue: mockLayoutService },
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: {} }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch categories and installment plans on ngOnInit()', () => {
    const mockCategories = [{ id: 1, name: 'Basic' }];
    const mockInstallmentPlans = [{ id: 1, plan: '3 Months' }];
    
    mockMembershipService.getCategories.and.returnValue(of(mockCategories));
    mockMembershipService.getInstallmentPlans.and.returnValue(of(mockInstallmentPlans));

    component.ngOnInit();

    expect(mockMembershipService.getCategories).toHaveBeenCalled();
    expect(mockMembershipService.getInstallmentPlans).toHaveBeenCalled();
    expect(component.categories$).toBeDefined();
    expect(component.installmentPlans$).toBeDefined();
  });

  it('should call onSave and save membership data', () => {
    const mockMembership = new Membership();
    mockMembership.name = 'Gold Membership';
    mockMembership.category = 'Premium';
    mockMembership.amount = 1000;
    mockMembership.period = '12 months';
    mockMembership.limit_type = 'Unlimited';
    mockMembership.selected_class = 'Class A';
    mockMembership.signup_fee = 100;
    mockMembership.description = 'Best membership option';

    component.newMembership = mockMembership;
    component.newCategory = new MembershipCategory();
    component.newCategory.name = 'Premium';
    component.newInstallmentPlan = new MembershipInstallmentPlan();
    component.newInstallmentPlan.duration_number = 6;
    component.newInstallmentPlan.duration_type = 'months';

    const mockFormData = new FormData();
    mockFormData.append('name', mockMembership.name);
    mockFormData.append('category', mockMembership.category);
    mockFormData.append('period', mockMembership.period);
    mockFormData.append('limit_type', mockMembership.limit_type);
    mockFormData.append('amount', mockMembership.amount.toString());
    mockFormData.append('selected_class', mockMembership.selected_class);
    mockFormData.append('installment_plan', '6 months');
    mockFormData.append('signup_fee', mockMembership.signup_fee.toString());
    mockFormData.append('description', mockMembership.description);

    mockMembershipService.addMembership.and.returnValue(of(mockMembership));

    spyOn(component, 'onSave').and.callThrough();
    component.onSave();
    
    expect(mockMembershipService.addMembership).toHaveBeenCalledWith(mockFormData);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/membership-list']);
  });

  it('should handle file selection correctly', () => {
    const file = new File([''], 'test-file.png', { type: 'image/png' });
    const event = { target: { files: [file] } };

    component.onFileSelected(event);

    expect(component.selectedFile).toEqual(file); // Ensure the selected file is correctly assigned
  });

  it('should navigate to membership list on cancel', () => {
    component.onCancel();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/membership-list']);
  });
});
