import { Component, OnInit } from '@angular/core';

import { EasyUser } from '../model/EasyUser';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-easy-user-list',
  standalone: true,
  imports: [FormsModule, CommonModule], // Import FormsModule here
  templateUrl: './easy-user-list.component.html',
  styleUrls: ['./easy-user-list.component.css']
})
export class EasyUserListComponent implements OnInit {
  showCreateUserModal = false;
  newUser: EasyUser = { uuid: this.generateUUID(), username: '', password: '' };
  users: EasyUser[] = [];
  editingUser: EasyUser | null = null;


  ngOnInit(): void {
    const easyUsers: EasyUser[] = [
      { uuid: '123e4567-e89b-12d3-a456-426614174000', username: 'user1', password: 'pass1' },
      { uuid: '123e4567-e89b-12d3-a456-426614174001', username: 'user2', password: 'pass2' },
      { uuid: '123e4567-e89b-12d3-a456-426614174002', username: 'user3', password: 'pass3' }
    ];

    this.users = easyUsers;
    console.log(easyUsers);
  }

  createUser(): void {
    this.users = [...this.users, this.newUser];
    this.showCreateUserModal = false;
    this.newUser = { uuid: this.generateUUID(), username: '', password: '' };
  }

  handleInputChange(event: any, isEditing = false): void {
    const name = event.target.name;
    const value = event.target.value;
    if (isEditing) {
      this.editingUser = { ...this.editingUser, [name]: value } as EasyUser;
    } else {
      this.newUser = { ...this.newUser, [name]: value };
    }
  }

  handleEditClick(user: EasyUser): void {
    this.editingUser = user;
    this.showCreateUserModal = true;
  }

  updateUser(): void {
    const updatedUsers = this.users.map(u => u.uuid === this.editingUser?.uuid ? this.editingUser : u);
    this.users = updatedUsers;
    this.showCreateUserModal = false;
    this.editingUser = null;
  }

  generateUUID(): string {
    return uuidv4(); // This will generate a new UUID
  }

}