import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopPanelComponent } from './top-panel';

describe('TopPanelComponent', () => {
  let component: TopPanelComponent;
  let fixture: ComponentFixture<TopPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopPanelComponent] // ✅ Use the correct class name here
    }).compileComponents();

    fixture = TestBed.createComponent(TopPanelComponent); // ✅ Match this too
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
