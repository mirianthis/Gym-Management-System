import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { MembersListComponent } from './pages/members-list/members-list.component';
import { AddMemberComponent } from './pages/members-list/add-member/add-member.component';
import { MembershipListComponent } from './pages/membership-list/membership-list.component';
import { AddMembershipComponent } from './pages/membership-list/add-membership/add-membership.component';
import { StaffListComponent } from './pages/staff-list/staff-list.component';
import { AddStaffComponent } from './pages/staff-list/add-staff/add-staff.component';
import { RegistrationComponent } from './pages/registration/registration.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'logout',
    component: LoginComponent,
    title: 'Logout'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegistrationComponent
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
        path: 'members-list',
        component: MembersListComponent,
        title: 'Members List'
      },
      {
        path: 'add-member',
        component: AddMemberComponent,
        title: 'Add Member'
      },
      {
        path: 'membership-list',
        component: MembershipListComponent,
        title: 'Membership List'
      },
      {
        path: 'add-membership',
        component: AddMembershipComponent,
        title: 'Add Membership'
      },
      {
        path: 'staff-list',
        component: StaffListComponent,
        title: 'Staff List'
      },
      {
        path: 'add-staff',
        component: AddStaffComponent,
        title: 'Add Staff'
      },
      {
        path: 'settings',
        component: SettingsComponent,
        title: 'Settings'
      }
    ]
  }
];
