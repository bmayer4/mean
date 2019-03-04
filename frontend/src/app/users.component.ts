import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({  // remove / in front of profile and it changes to users/profile
  selector: 'app-users',
  template: `
  <h2 style='padding-left: 8px;'>Users</h2>
  <div *ngFor='let user of apiService.users'>
  <mat-card routerLink='/profile/{{user._id}}' style='cursor: pointer'>{{ user.name }}</mat-card>
</div>
  `,
  styles: []
})
export class UsersComponent implements OnInit {

  constructor(public apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getusers();
  }

}
