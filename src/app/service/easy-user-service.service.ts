
import { Injectable } from '@angular/core';
import { EasyUser } from '../model/easy-user';

@Injectable({
  providedIn: 'root'
})
export class EasyUserService {
  getEasyUsers(): EasyUser[] {
    // Logic to retrieve users
    const easyUsers: EasyUser[] = [
      { uuid: '123e4567-e89b-12d3-a456-426614174000', username: 'user1', password: 'pass1' },
      { uuid: '123e4567-e89b-12d3-a456-426614174001', username: 'user2', password: 'pass2' },
      { uuid: '123e4567-e89b-12d3-a456-426614174002', username: 'user3', password: 'pass3' }
    ];
    
    console.log(easyUsers);
    
    return easyUsers;
  }
}