import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FindPeopleComponent } from './find-people'; // ✅ Correct import

describe('FindPeopleComponent', () => {
  let component: FindPeopleComponent;
  let fixture: ComponentFixture<FindPeopleComponent>; // ✅ Fix typo here

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindPeopleComponent] // ✅ Use the correct class name
    }).compileComponents();

    fixture = TestBed.createComponent(FindPeopleComponent); // ✅ Use correct class
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
