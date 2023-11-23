import { ActivatedRoute } from '@angular/router';
import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

import { Function } from '../function';
import { FunctionService } from '../function.service';

@Component({
  selector: 'app-function-detail',
  templateUrl: './function-detail.component.html',
  styleUrl: './function-detail.component.scss'
})
export class FunctionDetailComponent {
  function: Function  | undefined;

  constructor(
    private route: ActivatedRoute,
    private funcService: FunctionService,
    private location: Location
  ) {}

  ngOnInit(): void {    
    // this.route.paramMap.subscribe((params) => {
    //   const bankId = params.get('Id');
    //   this.getBank(bankId);
    //})
    this.getFunction();
    this.route.params.subscribe(params => {
      this.getFunction();
    })
  }
  
  getFunction(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.funcService.getFunction(id)
      .subscribe((func) => this.function = func);
  }

  goBack(): void {
    this.location.back();
  }
}
