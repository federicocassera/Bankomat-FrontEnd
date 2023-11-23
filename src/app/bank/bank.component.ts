import { Component } from '@angular/core';
import { Bank } from '../bank';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-banks',
  templateUrl: './bank.component.html',
  styleUrl: './bank.component.scss',
})
export class BankComponent {
  banks: Bank[] = [];
  selectedBanca: Bank = this.banks[0];

  constructor(private bankService: BankService) {}

  getBanks() {
    this.bankService.getBanks().subscribe((cs) => {
      this.banks = cs;
      console.log(cs);
    });
  }

  ngOnInit() {
    this.getBanks();
    console.log(this.banks);
  }
}
