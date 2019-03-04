import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-nav',
  template: `
    <mat-toolbar>
    <button mat-button routerLink='/' color='primary'>PSSocial</button>
    <span style="flex: 1 1 auto"></span>
    <div *ngIf='this.authService.getisAuth(); else loggedOut;'>
    <button mat-button routerLink='/post/new'>Add Post</button>
    <button mat-button routerLink='/users'>Users</button>
    <button mat-button (click)='logout()'>Logout</button>
    </div>

    <ng-template #loggedOut>
    <button mat-button routerLink='/register'>Register</button>
    <button mat-button routerLink='/login'>Login</button>
    </ng-template>

    </mat-toolbar>
  `
})
export class NavComponent {

  constructor(public authService: AuthService) {}

  logout() {
      this.authService.logoutUser();
  }

}
