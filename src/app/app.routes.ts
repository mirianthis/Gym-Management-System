import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { MembersListComponent } from './pages/members-list/members-list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        title: 'Dashboard'
      },
      {
        path: 'employee',
        component: EmployeeComponent,
        title: 'Employee'
      },
      {
        path: 'members-list',
        component: MembersListComponent,
        title: 'Members List'
      },
      {
        path: 'home',
        component: EmployeeComponent,
        title: 'Home'
      },
      {
        path: 'settings',
        component: SettingsComponent,
        title: 'Settings'
      },
      {
        path: 'logout',
        component: LoginComponent,
        title: 'Logout'
      }
    ]
  }
];
