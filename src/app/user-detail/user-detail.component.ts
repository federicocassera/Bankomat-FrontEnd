import { ActivatedRoute } from '@angular/router';
import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {
  user: User  | undefined;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ) {}

  ngOnInit(): void {    
    // this.route.paramMap.subscribe((params) => {
    //   const userId = params.get('Id');
    //   this.getuser(userId);
    //})
    this.getUser();
    this.route.params.subscribe(params => {
      this.getUser();
    })
  }
  
  getUser(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUser(id)
      .subscribe((user) => this.user = user);
  }

  goBack(): void {
    this.location.back();
  }
}

