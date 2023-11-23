import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

import { BankComponent } from './bank/bank.component';
import { BankDetailComponent } from './bank-detail/bank-detail.component';

import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

import { FunctionComponent } from './function/function.component';
import { FunctionDetailComponent } from './function-detail/function-detail.component';

const routes: Routes = [
  { path: 'banks', component: BankComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/detail/:id', component: BankDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'banks/detail/:id', component: BankDetailComponent },
  { path: 'users', component: UserComponent},
  { path: 'users/:id', component: UserDetailComponent },
  { path: 'functions', component: FunctionComponent},
  { path: 'functions/detail/:id', component: FunctionDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
