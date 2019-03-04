import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styles: [`
  .pb {
      margin: 20px 0;
    }
  `]
})
export class MessagesComponent implements OnInit {

  userId: string;

  constructor(public apiService: ApiService, public authService: AuthService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.userId = this.route.snapshot.params.id;
    this.apiService.getMessages(this.userId);
  }

  deletePost(id) {
    this.apiService.deleteMessage(id).subscribe(res => {
      this.apiService.getMessages(this.userId);
    }, err => {
      throw(err);
    });
  }

}
