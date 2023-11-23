import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Bank } from './bank';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  private banksUrl: string = 'https://localhost:7198/api/Bank';
  

  constructor(private http: HttpClient,
              private messageService: MessageService) { }

  getBanks(): Observable<Bank[]>{
    this.log('fetched Banks');
    return this.http.get<Bank[]>(this.banksUrl);
  }

  getBank(id: number | null): Observable<Bank>{
    this.log(`fetched Bank id:${id}`);
    return this.http.get<Bank>(`${this.banksUrl}/${id}`);
  }

  
  private log(message: string) {
    this.messageService.add(`BankService: ${message}`);
  }
}