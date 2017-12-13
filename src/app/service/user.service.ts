import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

    getCurrentUser(): string {
        return localStorage.getItem('currentUser');
    }

}