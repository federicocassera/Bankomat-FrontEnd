import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BankComponent } from './bank/bank.component';
import { BankDetailComponent } from './bank-detail/bank-detail.component';

import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

import { FunctionComponent } from './function/function.component';
import { FunctionDetailComponent } from './function-detail/function-detail.component';

import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    BankComponent,
    BankDetailComponent,
    MessagesComponent,
    DashboardComponent,
    UserComponent,
    UserDetailComponent,
    FunctionComponent,
    FunctionDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

