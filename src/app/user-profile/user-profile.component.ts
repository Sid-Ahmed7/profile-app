import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

interface User {
  name : string;
  firstName : string;
  age: number;
  quote : string;
  photo : string;
}

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, FormsModule ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  user : User = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : 'La vie est un court exil',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };
  
  isAgeDisplay : boolean = false;

  toggleAgeDisplay() {
    this.isAgeDisplay = !this.isAgeDisplay; 
  }
}
