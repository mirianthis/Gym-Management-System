import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginObject, LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private loginService: LoginService) { }

  loginObj: LoginObject = {userName: '', password: ''};

  router = inject(Router)

  onLogin() {
    this.loginService.login(this.loginObj);
    this.loginService.userName = this.loginObj.userName; 
  }
}
