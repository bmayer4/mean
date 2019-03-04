import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  template: `
    <mat-card>
    <mat-card-header>
    <mat-card-title>Log in</mat-card-title>
    </mat-card-header>
    <mat-card-content>
    <form #loginForm="ngForm" class='regForm' (ngSubmit)='login(loginForm)'>
    <mat-form-field>
        <input matInput (ngModel)='loginData.email' name='email' placeholder='email' type='email' />
    </mat-form-field>
    
    <mat-form-field>
        <input matInput [(ngModel)]='loginData.password' name='password' placeholder='password' type='password' />
    </mat-form-field>
    <button mat-raised-button color='primary'>Log in</button>
    </form>
    </mat-card-content>
    </mat-card>
  `,
  styles: [`
        .mat-form-field {
            width: 100%;
        }
        .regForm {
            max-width: 500px;
        }
    `]
})
export class LoginComponent implements OnInit {

  loginData = {
      email: '',
      password: ''
  };

  constructor(private authService: AuthService) {}

  ngOnInit() {
    //
  }

  login(formValue: NgForm) {
      if (formValue.invalid) { return }
      this.authService.loginUser(formValue.value);
      
  }

}
