import { Component } from '@angular/core';
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
  constructor(private router: Router) {}

  navigateTo(route: string): void {
  this.router.navigate([`/dashboard/${route}`]);
}

}
