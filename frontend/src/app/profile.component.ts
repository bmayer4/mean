import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  template: `
  <mat-card>
  <mat-card-header>
  <mat-card-title>Profile</mat-card-title>
  </mat-card-header>
  <mat-card-content>
    <mat-list>
        <mat-list-item>Name: {{profile?.name}}</mat-list-item>
        <mat-list-item>Email: {{profile?.email}}</mat-list-item>
        <mat-list-item>Description: {{profile?.description}}</mat-list-item>
    </mat-list>
  </mat-card-content>
  </mat-card>

  <mat-card>
  <mat-card-header>
  <mat-card-title>Posts</mat-card-title>
  </mat-card-header>
  <mat-card-content>
  <app-messages></app-messages>
  </mat-card-content>
  </mat-card>
  `,
  styles: []
})
export class ProfileComponent implements OnInit {

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

    profile;

  ngOnInit() {
    // this.apiService.getuser(+this.route.snapshot.paramMap.get('id'));  //works also but only with number id databases
    this.apiService.getuser(this.route.snapshot.params.id).subscribe(data => {
        // console.log(typeof this.route.snapshot.params.id);  //string, mongoid cant be number has letters in it
        // console.log(typeof +this.route.snapshot.params.id);  //number
        this.profile = data;
    });
  }

}
