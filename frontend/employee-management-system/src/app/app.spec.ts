import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app'; // Import your App component
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes'; // Import routes to allow routing to work

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideRouter(appRoutes)]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
