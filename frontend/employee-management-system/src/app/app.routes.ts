import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { DashboardComponent } from './dashboard/dashboard';
import { HomeComponent } from './home/home';
import { FindPeopleComponent } from './find-people/find-people';
import { ProjectsComponent } from './projects/projects';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'find-people', component: FindPeopleComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  }
];
