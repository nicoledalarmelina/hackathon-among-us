import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Toast } from '../../../core/models/toast/toast.model';
import { BehaviorSubject, Subscription } from 'rxjs';
import { animate, style, transition, trigger } from '@angular/animations';
import { transform } from 'typescript';
import { NgClass } from '@angular/common';
import { ToastService } from './toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [NgClass],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
  animations: [
    trigger('toastAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(100%)', opacity: 0 }),
        animate('300ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ transform: 'translateY(100%)', opacity: 0 }))
      ])
    ])
  ]
})
export class ToastComponent implements OnInit, OnDestroy {

  private toastService = inject(ToastService);
  toasts: Toast[] = [];
  private subscription: Subscription;

  ngOnInit(): void {
    this.subscription = this.toastService.toast$.subscribe(toast => this.toasts = toast)
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  removeToast(id: number) {
    this.toastService.remove(id);
  }

}
