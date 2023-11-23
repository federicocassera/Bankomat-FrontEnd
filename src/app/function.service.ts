import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Function } from './function';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class FunctionService {
  private funcsUrl: string = 'https://localhost:7198/Api/Function';
  

  constructor(private http: HttpClient,
              private messageService: MessageService) { }

  getFunctions(): Observable<Function[]>{
    this.log('fetched functions');
    return this.http.get<Function[]>(this.funcsUrl);
  }

  getFunction(id: number | null): Observable<Function>{
    this.log(`fetched function id:${id}`);
    return this.http.get<Function>(`${this.funcsUrl}/${id}`);
  }
  
  private log(message: string) {
    this.messageService.add(`FunctionService: ${message}`);
  }
}