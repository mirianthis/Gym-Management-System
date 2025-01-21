// layout.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit{

  constructor(public loginService: LoginService) {}

  ngOnInit(): void {
    this.userName = this.loginService.userName;
  }

  sidebarActive: boolean = false;
  activeItem: string = '';
  userName: string = '';

  toggleSidebar(): void {
    this.sidebarActive = !this.sidebarActive;
  }

  isActive(item: string): boolean {
    return this.activeItem === item;
  }

  setActive(item: string): void {
    this.activeItem = item;
  }
}
