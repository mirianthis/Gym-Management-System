// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { LoginComponent } from './login.component';
// import { AuthenticationService } from '../../services/login-service/authentication.service';
// import { Router } from '@angular/router';
// import { MessageService } from 'primeng/api';
// import { of, throwError } from 'rxjs';
// import { HttpClientTestingModule } from '@angular/common/http/testing'; 
// import { RouterModule, provideRouter } from '@angular/router';
// import { FormsModule } from '@angular/forms';
// import { provideLocationMocks } from '@angular/common/testing';

// fdescribe('LoginComponent', () => {
//   let component: LoginComponent;
//   let fixture: ComponentFixture<LoginComponent>;
//   let mockAuthService: jasmine.SpyObj<AuthenticationService>;
//   let mockRouter: jasmine.SpyObj<Router>;
//   let mockMessageService: jasmine.SpyObj<MessageService>;

//   beforeEach(async () => {
//     // Create spy objects for dependencies
//     mockAuthService = jasmine.createSpyObj('AuthenticationService', ['login']);
//     mockRouter = jasmine.createSpyObj('Router', ['navigate']);
//     mockMessageService = jasmine.createSpyObj('MessageService', ['add']);

//     await TestBed.configureTestingModule({
//       imports: [
//         LoginComponent,
//         HttpClientTestingModule,
//         RouterModule,  // Add RouterModule for router-related imports
//         FormsModule,
//       ],
//       providers: [
//         { provide: AuthenticationService, useValue: mockAuthService },
//         { provide: Router, useValue: mockRouter },
//         { provide: MessageService, useValue: mockMessageService },
//         provideRouter([]),  // Provide router here using provideRouter
//         provideLocationMocks(),  // Provide location mocks (this replaces RouterTestingModule)
//       ]
//     }).compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(LoginComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should login successfully and navigate to dashboard', () => {
//     // Mock successful login response
//     const mockResponse = { access: 'mockAccessToken', refresh: 'mockRefreshToken' };
//     mockAuthService.login.and.returnValue(of(mockResponse));

//     spyOn(localStorage, 'setItem');

//     component.credentials = { username: 'testuser', password: 'testpass' };
//     component.onLogin();

//     expect(mockAuthService.login).toHaveBeenCalledWith({ username: 'testuser', password: 'testpass' });

//     // Ensure tokens are stored in localStorage
//     expect(localStorage.setItem).toHaveBeenCalledWith('access_token', 'mockAccessToken');
//     expect(localStorage.setItem).toHaveBeenCalledWith('refresh_token', 'mockRefreshToken');

//     // Ensure username is set
//     expect(mockAuthService.username).toBe('testuser');

//     // Ensure navigation to dashboard
//     expect(mockRouter.navigate).toHaveBeenCalledWith(['/dashboard']);
//   });

//   it('should handle login error and show message', () => {
//     // Mock login failure
//     const mockError = { status: 401, message: 'Invalid credentials' };
//     mockAuthService.login.and.returnValue(throwError(() => mockError));

//     component.credentials = { username: 'wronguser', password: 'wrongpass' };
//     component.onLogin();

//     // Ensure login was called
//     expect(mockAuthService.login).toHaveBeenCalledWith({ username: 'wronguser', password: 'wrongpass' });

//     // Ensure error message is displayed
//     expect(mockMessageService.add).toHaveBeenCalledWith({
//       severity: 'error',
//       summary: 'Login Error',
//       detail: 'Invalid username or password.'
//     });

//     // Ensure navigation was NOT called
//     expect(mockRouter.navigate).not.toHaveBeenCalled();
//   });
// });
