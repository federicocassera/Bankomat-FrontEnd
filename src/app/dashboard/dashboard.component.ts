import { Component, OnInit } from '@angular/core';
import { Bank } from '../bank';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})

export class DashboardComponent implements OnInit {
  banks: Bank[] = [];

  constructor(private bankService: BankService) {}

  ngOnInit(): void {
    this.getBanks();
  }

  getBanks(): void {
    this.bankService
      .getBanks()
      .subscribe((bank) => (this.banks = bank.slice(0, 5)));
  }
}
