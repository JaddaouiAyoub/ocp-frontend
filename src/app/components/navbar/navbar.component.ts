import { Component } from '@angular/core';
import {NgIf} from "@angular/common";
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
    imports: [
        NgIf
    ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  showMenu = false;

  constructor(private router: Router) {
  }
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
  // Fermer le menu si on clique à l'extérieur
  closeMenu() {
    this.showMenu = false;
  }

// Empêche la propagation du clic vers le parent
  stopPropagation(event: MouseEvent) {
    event.stopPropagation();
  }
}
