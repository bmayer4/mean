import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html', 
  styles: [`
        .mat-form-field {
            width: 100%;
        }
        .regForm {
            max-width: 500px;
        }
    `]
})
export class RegisterComponent implements OnInit {

  registerData = {
      name: '',
      password: '',
      description: '',
      email: ''
  };

  constructor(private authService: AuthService) {}

  ngOnInit() {
    //
  }

  register(formValue: NgForm) {
      if (formValue.invalid) { return; }
      this.authService.registerUser(formValue.value);
  }

}
