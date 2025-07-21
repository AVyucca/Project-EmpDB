import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-find-people',
  templateUrl: './find-people.html',
  styleUrls: ['./find-people.css'],
  standalone: true,// ✅ Include only if you're using standalone components
  imports: [CommonModule] // ✅ Import CommonModule if using standalone components
})
export class FindPeopleComponent {
  // ✅ Define the employees array
  employees = [
    {
      id: '123',
      firstName: 'abc',
      middleName: 'abc',
      lastName: 'abc',
      email: 'abc@example.com',
      department: 'abc'
    },
    {
      id: '124',
      firstName: 'xyz',
      middleName: 'pqr',
      lastName: 'lmn',
      email: 'xyz@example.com',
      department: 'IT'
    }
  ];
}

