import { Injectable } from '@angular/core';
import { Toast } from '../../../core/models/toast/toast.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toasts: Toast[] = [];
  private toastSubject = new BehaviorSubject<Toast[]>([]);
  toast$ = this.toastSubject.asObservable();

  private show(title: string, message: string, type: 'success' | 'error' | 'info' | 'warning') {
    const id = Date.now();
    const toast: Toast = { id, title, message, type };
    this.toasts.push(toast);
    this.toastSubject.next(this.toasts);
    setTimeout(() => this.remove(id), 3000);

    return id;
  }

  remove(id: number) {
    this.toasts = this.toasts.filter(t => t.id !== id);
    this.toastSubject.next(this.toasts);
  }

  showToast(type: 'success' | 'error' | 'info' | 'warning', message: string) {
    switch (type) {
      case 'success': this.success('SUCESSO', message);
        break;
      case 'error': this.error('ERRO', message);
        break;
      case 'info': this.info('INFO', message);
        break;
      case 'warning': this.warning('ATENÇÃO', message);
        break;
    }
  }

  private success(title: string, message: string): number {
    return this.show(title, message, 'success');
  }

  private error(title: string, message: string): number {
    return this.show(title, message, 'error');
  }

  private info(title: string, message: string): number {
    return this.show(title, message, 'info');
  }

  private warning(title: string, message: string): number {
    return this.show(title, message, 'warning');
  }
}
