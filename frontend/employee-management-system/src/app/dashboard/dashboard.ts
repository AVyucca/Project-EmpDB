import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar';
import { HomeComponent } from '../home/home'; // ✅ Import HomeComponent
import { TopPanelComponent } from '../top-panel/top-panel'; 

@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [CommonModule, RouterModule, SidebarComponent,TopPanelComponent], // ✅ Include it
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent {
  showTopPanel = true;

  onToggleTopPanel(): void {
    this.showTopPanel = !this.showTopPanel;
  }
}
