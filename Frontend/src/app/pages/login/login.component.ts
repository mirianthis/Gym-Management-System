import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../../services/login-service/authentication.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, ToastModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  credentials = { username: '', password: '' };

  constructor(private authService: AuthenticationService, private router: Router, private messageService: MessageService) {}

  onLogin() {
    this.authService.login(this.credentials).subscribe({
      next: (response) => {
        localStorage.setItem('access_token', response.access);
        localStorage.setItem('refresh_token', response.refresh);
        this.authService.username = this.credentials.username;
        this.router.navigate(['/dashboard']); // Redirect after login
      },
      error: (error) => {
        this.messageService.add({severity: 'error', summary:  'Login Error', detail: 'Invalid username or password.' }); 
        console.error("Login Error" + error);
      }
    });
  }
}
