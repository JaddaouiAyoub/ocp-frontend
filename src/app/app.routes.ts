import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {AuthGuard} from './guards/auth.guard';
import {AdminDashboardComponent} from './pages/admin-dashboard/admin-dashboard.component';
import {UserDashboardComponent} from './pages/user-dashboard/user-dashboard.component';
import {homeGuard} from './guards/home.guard';
import {ChangePasswordComponent} from './pages/change-password/change-password.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [homeGuard]
  },
  {
    path: 'dashboard/admin',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard],
    data: { role: 'ADMIN' }
  },
  {
    path: 'dashboard/user',
    component: UserDashboardComponent,
    canActivate: [AuthGuard],
    data: { role: 'USER' }
  },
  { path: 'dashboard/change-password',
    canActivate: [AuthGuard],
    component: ChangePasswordComponent },

];
