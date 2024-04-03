import { Component } from '@angular/core';
import { EasyUser } from '../model/easy-user';
import { EasyUserService } from '../service/easy-user-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css'
})
export class UserManagementComponent {
  easyUserList: EasyUser[];

  constructor(private easyUserService: EasyUserService) {
    this.easyUserList = this.easyUserService.getEasyUsers();
    console.log(this.easyUserList);
  }

  createUser() {
    // Logic to create a new user
  }
}
