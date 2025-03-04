import { CommonModule } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthenticationService } from '../../services/login-service/authentication.service';
import { LayoutService } from '../../services/layout-service/layout.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit{
  sidebarActive: boolean = false;
  activeItem: string = '';
  userName?: string = '';

  constructor(public authService: AuthenticationService, private layoutService: LayoutService) {}

  ngOnInit(): void {
    this.userName = this.authService.username;
  }


  toggleSidebar(): void {
    this.sidebarActive = !this.sidebarActive;
    this.layoutService.sideBarVisibleSubject$.next(this.sidebarActive);

  }

  isActive(item: string): boolean {
    return this.activeItem === item;
  }

  setActive(item: string): void {
    this.activeItem = item;
  }
}
