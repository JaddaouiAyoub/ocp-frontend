import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-client-detail',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './client-detail.component.html',
  styleUrl: './client-detail.component.css'
})
export class ClientDetailComponent implements OnInit {
  clientName: string = '';
  date: string = '';
  heure: string = '';
  predictionResult: any = null;
  errorMessage: string = '';
  loading: boolean = false;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.clientName = this.route.snapshot.paramMap.get('name') || '';
  }

  submitPrediction(): void {
    this.predictionResult = null;
    this.errorMessage = '';
    this.loading = true;

    const payload = {
      client: this.clientName,
      date: this.date,
      heure: this.heure
    };

    this.http.post('http://localhost:5000/predict', payload).subscribe({
      next: (res: any) => {
        this.predictionResult = res;
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = err.error?.error || 'Une erreur est survenue.';
        this.loading = false;
      }
    });
  }
}
