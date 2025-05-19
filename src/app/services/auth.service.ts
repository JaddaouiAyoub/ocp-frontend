import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
interface AuthRequest {
  username: string;
  password: string;
}

interface AuthResponse {
  token: string;
  refreshToken: string;
  email: string;
  role: string;
  nom: string;
  // ajoute les autres champs si nécessaires
}
@Injectable({
  providedIn: 'root'
})


export class AuthService {
  private apiUrl = 'http://localhost:8080/api/v1/auth';

  constructor(private http: HttpClient) {}

  login(data: AuthRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, data);
  }
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
  getUserRole(): string | null {
    return localStorage.getItem('role');

  }
  getUserEmail(): string | null {
    return localStorage.getItem('email');

  }

  changePassword(email: string | null, oldPassword: string, newPassword: string) {
    return this.http.post<any>(`${this.apiUrl}/change-password`, {
      email,
      oldPassword,
      newPassword
    });
  }
}
