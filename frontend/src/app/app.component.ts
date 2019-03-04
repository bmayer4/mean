import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  template: `
    <app-nav></app-nav>
    <div class='cont'>
    <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService) {}

    ngOnInit() {
        this.authService.setAuth();
    }

}
