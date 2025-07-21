import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css'],
  imports: [CommonModule, RouterModule]
})
export class SidebarComponent {
  @Output() toggleTopPanel = new EventEmitter<void>();

  constructor(private router: Router) {}

  navigateTo(route: string): void {
    this.router.navigate([`/dashboard/${route}`]);
  }

  toggleTop(): void {
    this.toggleTopPanel.emit();
  }

  // ✅ Add this method to fix the error
  logout(): void {
    localStorage.clear();  // Or sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
