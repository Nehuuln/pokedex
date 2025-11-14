import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { LoadingService } from './loading.service';

@Component({
  standalone: true,
  selector: 'app-spinner',
  imports: [CommonModule],
  template: `
    <div *ngIf="loading$ | async" class="spinner-overlay" aria-hidden="false">
      <div class="spinner" role="status" aria-label="Chargement">⏳</div>
    </div>
  `,
  styles: [`
    .spinner-overlay{
      position: fixed;
      top:0;left:0;right:0;bottom:0;
      display:flex;
      align-items:center;
      justify-content:center;
      background: rgba(0,0,0,0.25);
      z-index: 10000;
    }
    .spinner{
      font-size: 48px;
      line-height: 1;
      animation: spin 1s linear infinite;
      filter: drop-shadow(0 2px 4px rgba(0,0,0,0.4));
    }
    @keyframes spin { to { transform: rotate(360deg); } }
  `]
})
export class SpinnerComponent {
  loading$: Observable<boolean>;
  constructor(private loadingService: LoadingService) {
    this.loading$ = this.loadingService.loading$;
  }
}