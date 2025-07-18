import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar'; // Adjust path if needed

@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [CommonModule, RouterModule, SidebarComponent],
 templateUrl: './dashboard.html',
styleUrls: ['./dashboard.css'] // Optional for styling
})
export class DashboardComponent { }

