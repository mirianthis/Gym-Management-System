import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MembershipService } from './membership.service';
import { HttpClient } from '@angular/common/http';

describe('MembershipService', () => {
  let service: MembershipService;
  let httpMock: HttpTestingController;

  const membershipsUrl = 'http://127.0.0.1:8000/api/membership/memberships/';
  const membershipListUrl = 'http://127.0.0.1:8000/api/membership/memberships-list/';
  const categoriesUrl = 'http://127.0.0.1:8000/api/membership/categories/';
  const installmentPlansUrl = 'http://127.0.0.1:8000/api/membership/installments/';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  // Mock HttpClient module
      providers: [MembershipService]
    });

    service = TestBed.inject(MembershipService);
    httpMock = TestBed.inject(HttpTestingController);  // Inject HttpTestingController
  });

  afterEach(() => {
    // Ensure that there are no outstanding HTTP requests
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get memberships', () => {
    const mockMemberships = [{ id: 1, name: 'Gold Membership' }, { id: 2, name: 'Silver Membership' }];

    service.getMemberships().subscribe(memberships => {
      expect(memberships).toEqual(mockMemberships);
    });

    const req = httpMock.expectOne(membershipsUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockMemberships);  // Respond with mock data
  });

  it('should get memberships list', () => {
    const mockMembershipList = [{ id: 1, name: 'Gold Membership' }, { id: 2, name: 'Silver Membership' }];

    service.getMembershipsList().subscribe(membershipList => {
      expect(membershipList).toEqual(mockMembershipList);
    });

    const req = httpMock.expectOne(membershipListUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockMembershipList);  // Respond with mock data
  });

  it('should get membership by ID', () => {
    const mockMembership = { id: 1, name: 'Gold Membership' };

    service.getMembershipById(1).subscribe(membership => {
      expect(membership).toEqual(mockMembership);
    });

    const req = httpMock.expectOne(`${membershipsUrl}1/`);
    expect(req.request.method).toBe('GET');
    req.flush(mockMembership);  // Respond with mock data
  });

  it('should add membership', () => {
    const newMembership = { name: 'Platinum Membership', description: 'Exclusive membership' };
    const mockResponse = { id: 1, ...newMembership };

    service.addMembership(newMembership).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(membershipsUrl);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(newMembership);
    req.flush(mockResponse);  // Respond with mock data
  });

  it('should update membership', () => {
    const updatedMembership = { name: 'Updated Membership', description: 'Updated description' };
    const mockResponse = { id: 1, ...updatedMembership };

    service.updateMembership(1, updatedMembership).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`${membershipListUrl}1/`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(updatedMembership);
    req.flush(mockResponse);  // Respond with mock data
  });

  it('should delete membership', () => {
    const mockResponse = { message: 'Membership deleted successfully' };

    service.deleteMembership(1).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`${membershipListUrl}1/`);
    expect(req.request.method).toBe('DELETE');
    req.flush(mockResponse);  // Respond with mock data
  });

  it('should get categories', () => {
    const mockCategories = [{ id: 1, name: 'Gold' }, { id: 2, name: 'Silver' }];

    service.getCategories().subscribe(categories => {
      expect(categories).toEqual(mockCategories);
    });

    const req = httpMock.expectOne(categoriesUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockCategories);  // Respond with mock data
  });

  it('should delete category', () => {
    const mockResponse = { message: 'Category deleted successfully' };

    service.deleteCategory(1).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`${categoriesUrl}1/`);
    expect(req.request.method).toBe('DELETE');
    req.flush(mockResponse);  // Respond with mock data
  });

  it('should get installment plans', () => {
    const mockInstallmentPlans = [{ id: 1, plan: 'Monthly' }, { id: 2, plan: 'Quarterly' }];

    service.getInstallmentPlans().subscribe(installmentPlans => {
      expect(installmentPlans).toEqual(mockInstallmentPlans);
    });

    const req = httpMock.expectOne(installmentPlansUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockInstallmentPlans);  // Respond with mock data
  });

  it('should delete installment plan', () => {
    const mockResponse = { message: 'Installment plan deleted successfully' };

    service.deleteInstallmentPlan(1).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`${installmentPlansUrl}1/`);
    expect(req.request.method).toBe('DELETE');
    req.flush(mockResponse);  // Respond with mock data
  });
});
