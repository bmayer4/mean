import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-postEdit',
  template: `
  <mat-card>
    <mat-card-header>
    <mat-card-title>Edit Post</mat-card-title>
    </mat-card-header>
    <mat-card-content>
    <form #postForm="ngForm" class='postForm' (ngSubmit)='editPost()'>
    <mat-form-field>
        <textarea matInput [(ngModel)]='post.message' name='message' placeholder='Post Message'></textarea>
    </mat-form-field>
    <button mat-raised-button color='primary'>Post</button>
    </form>
    </mat-card-content>
    </mat-card>
  `,
  styles: [`
  .mat-form-field {
    width: 100%;
}
  .postForm {
    max-width: 500px;
}
  `]
})
export class PostEditComponent implements OnInit {

    post: any = {};
    postId;

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.postId = this.route.snapshot.params.id;
    this.apiService.getMessage(this.postId).subscribe(post => {
        this.post = post;
    });
  }

  editPost() {
    this.apiService.updateMessage(this.post);
  }

}