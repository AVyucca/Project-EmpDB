import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class ProjectsComponent {
  projects = [
    { manager: 'ByeWind', name: 'abc', status: 'In Progress', avatar: 'assets/avatar1.png' },
    { manager: 'Natali Craig', name: 'abc', status: 'In Progress', avatar: 'assets/avatar2.png' },
    { manager: 'Drew Cano', name: 'abc', status: 'Complete', avatar: 'assets/avatar3.png' },
    { manager: 'Orlando Diggs', name: 'abc', status: 'Complete', avatar: 'assets/avatar4.png' },
    { manager: 'Andi Lane', name: 'abc', status: 'Complete', avatar: 'assets/avatar5.png' }
  ];
}
