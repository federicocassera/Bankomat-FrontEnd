import { Component } from '@angular/core';
import { Function } from '../function';
import { FunctionService } from '../function.service';

@Component({
  selector: 'app-function',
  templateUrl: './function.component.html',
  styleUrl: './function.component.scss',
})
export class FunctionComponent {
  funcs: Function[] = [];
  selectedFunc: Function = this.funcs[0];

  constructor(private funcService: FunctionService) {}

  getFunctions() {
    this.funcService.getFunctions().subscribe((cs) => {
      this.funcs = cs;
      console.log(cs);
    });
  }

  ngOnInit() {
    this.getFunctions();
    console.log(this.funcs);
  }
}
