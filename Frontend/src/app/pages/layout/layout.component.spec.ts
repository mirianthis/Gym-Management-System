import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutComponent } from './layout.component';
import { AuthenticationService } from '../../services/login-service/authentication.service';
import { LayoutService } from '../../services/layout-service/layout.service';
import { RouterOutlet, RouterLink, RouterLinkActive, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, of } from 'rxjs';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;
  let mockAuthService: jasmine.SpyObj<AuthenticationService>;
  let mockLayoutService: jasmine.SpyObj<LayoutService>;
  let sidebarSubject: BehaviorSubject<boolean>;

  beforeEach(async () => {
    mockAuthService = jasmine.createSpyObj('AuthenticationService', [], { username: 'TestUser' });
    mockLayoutService = jasmine.createSpyObj('LayoutService', ['sideBarVisibleSubject$']);

    sidebarSubject = new BehaviorSubject<boolean>(false);

    mockLayoutService = jasmine.createSpyObj('LayoutService', ['showSideBar', 'hideSideBar'], {
      sideBarVisibleSubject$: sidebarSubject,
      sideBarVisibleObs$: sidebarSubject.asObservable()
    });

    await TestBed.configureTestingModule({
      imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule, LayoutComponent],
      providers: [
        { provide: AuthenticationService, useValue: mockAuthService },
        { provide: LayoutService, useValue: mockLayoutService },
        { provide: ActivatedRoute, useValue: {} }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize userName from authentication service', () => {
    expect(component.userName).toBe('TestUser');
  });

  it('should toggle sidebar state and notify layout service', () => {
    spyOn(mockLayoutService.sideBarVisibleSubject$, 'next');
    
    component.toggleSidebar();
    expect(component.sidebarActive).toBeTrue();
    expect(mockLayoutService.sideBarVisibleSubject$.next).toHaveBeenCalledWith(true);
    
    component.toggleSidebar();
    expect(component.sidebarActive).toBeFalse();
    expect(mockLayoutService.sideBarVisibleSubject$.next).toHaveBeenCalledWith(false);
  });

  it('should correctly determine active state of a menu item', () => {
    component.activeItem = 'dashboard';
    
    expect(component.isActive('dashboard')).toBeTrue();
    expect(component.isActive('settings')).toBeFalse();
  });

  it('should set active item correctly', () => {
    component.setActive('profile');
    expect(component.activeItem).toBe('profile');
  });
});

