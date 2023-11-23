import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  users: User[] = [];
  selectedUser: User = this.users[0];

  constructor(private userService: UserService) {}

  getUsers() {
    this.userService.getUsers().subscribe((cs) => {
      this.users = cs;
      console.log(cs);
    });
  }

  ngOnInit() {
    this.getUsers();
    console.log(this.users);
  }
}
