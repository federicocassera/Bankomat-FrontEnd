import { ActivatedRoute } from '@angular/router';
import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

import { Bank } from '../bank';
import { BankService } from '../bank.service';

import { User } from '../user';
import { UserService } from '../user.service';

import { Function } from '../function';
import { FunctionService } from '../function.service';

import { MessageService } from '../message.service';

@Component({
  selector: 'app-bank-detail',
  templateUrl: './bank-detail.component.html',
  styleUrl: './bank-detail.component.scss'
})
export class BankDetailComponent {
  bank: Bank | undefined;
  users: User[] | undefined;
  funcs: Function[] | undefined;
  
  constructor(
    private route: ActivatedRoute,
    private bankService: BankService,
    private userService: UserService,
    private funcService: FunctionService,
    private messageService: MessageService,
    private location: Location
  ) {}

  ngOnInit(): void {    
    // this.route.paramMap.subscribe((params) => {
    //   const bankId = params.get('Id');
    //   this.getBank(bankId);
    //})
    this.getBank();
    this.route.params.subscribe(params => {
      this.getBank();
    })
  }
  
  getBank(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.bankService.getBank(id)
      .subscribe((bank) => {
        this.bank = bank
        this.userService.getUserByBanca(id)
        .subscribe((user) => this.users = user);
        this.funcService.getFunctions()
        .subscribe((func) => this.funcs = func);
      });
  }

  goBack(): void {
    this.location.back();
  }

  updateUser(user: User | null): void{
    this.userService.UpdateUser(user).subscribe((user) => this.log(`modify User id:${user!.id}`));
  }

  private log(message: string) {
    this.messageService.add(`UserService: ${message}`);
  }
}
