import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private _loading = new BehaviorSubject<boolean>(false);
  loading$ = this._loading.asObservable();
  private _count = 0;

  show(): void {
    this._count++;
    if (this._count > 0) {
      this._loading.next(true);
    }
  }

  hide(): void {
    this._count--;
    if (this._count <= 0) {
      this._count = 0;
      this._loading.next(false);
    }
  }
}