import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-not-found',
  imports: [CommonModule],
  templateUrl: 'not-found.component.html'
})
export class NotFoundComponent{
  constructor(private router: Router) {}

  goHome(): void{
    this.router.navigate(['/']);
  }
}
