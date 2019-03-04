import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-post',
  template: `
  <mat-card>
    <mat-card-header>
    <mat-card-title>New Post</mat-card-title>
    </mat-card-header>
    <mat-card-content>
    <form #postForm="ngForm" class='postForm' (ngSubmit)='addPost()'>
    <mat-form-field>
        <textarea matInput [(ngModel)]='postMessage' name='postMessage' placeholder='Post Message'></textarea>
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
export class PostComponent {

    postMessage: string = '';

  constructor(private apiService: ApiService) {}

  addPost() {
    if (this.postMessage.length < 1) { return; }
    this.apiService.postMessage({ message: this.postMessage });
  }

}
