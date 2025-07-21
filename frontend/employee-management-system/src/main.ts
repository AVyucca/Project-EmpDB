import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app'; // ✅ must include <router-outlet>
//import { LoginComponent } from './app/login/login';
//import { DashboardComponent } from './app/dashboard/dashboard';
import { appRoutes } from './app/app.routes'; // ✅ must include routes



/*bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      //{ path: '', redirectTo: 'login', pathMatch: 'full' },
      //{ path: 'login', component: LoginComponent },
      //{ path: 'dashboard', component: DashboardComponent },
    
    ])
  ]
});*/
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes) // ✅ must include routes
  ]
});
