import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {NgIf} from '@angular/common';
import {SelectionCardsComponent} from '../../components/selection-cards/selection-cards.component';
import {NavbarComponent} from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  standalone: true,
  imports: [
    NgIf,
    SelectionCardsComponent,
    NavbarComponent,
    RouterOutlet
  ],
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  showMenu = false;

  constructor(private router: Router) {}

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  changePassword() {
    this.router.navigate(['dashboard/change-password']);
  }
  getUsename() {
    return localStorage.getItem('username');
  }
}
