import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from './user';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl: string = 'https://localhost:7198/Users';

  constructor(private http: HttpClient,
              private messageService: MessageService) { }

  getUsers(): Observable<User[]>{
    this.log('fetched users');
    return this.http.get<User[]>(this.usersUrl);
  }

  getUserByBanca(idBanca: number | null): Observable<User[]>{
    this.log('users of a bank');
    return this.http.get<User[]>(`${this.usersUrl}/bank/${idBanca}`);
  }

  getUser(id: number | null): Observable<User>{
    this.log(`fetched User id:${id}`);
    return this.http.get<User>(`${this.usersUrl}/${id}`);
  }

  UpdateUser(user: User | null): Observable<User>{
    const url = `${this.usersUrl}?UserId=${user!.id}`;
    return this.http.put<User>(url, user);
  }
  
  private log(message: string) {
    this.messageService.add(`UserService: ${message}`);
  }
}