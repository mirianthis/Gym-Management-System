import { Component } from '@angular/core';
import { Member } from '../../models/members.model';
import { MembersService } from '../../services/members-service/members.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { User } from '../../models/user.model';
import { MessageService } from 'primeng/api';
import { AuthenticationService } from '../../services/login-service/authentication.service';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, ToastModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  constructor(private router: Router, private authService: AuthenticationService, private messageService: MessageService) {

  }

  newUser = new User({});

  ngOnInit(): void {

  }

  onRegister() {
    this.authService.register(this.newUser).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']); // Redirect to dashboard page after registration
      },
      error: (error) => {
        this.messageService.add({severity: 'error', summary:  'Login Error', detail: 'Registration failed. Try again.' }); 
        console.error("Registration failed. Try again." + error);
      }
    });
  }
}
