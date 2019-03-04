import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class AuthService {

    path = environment.path + '/auth';
    options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    currentUser: any;

    constructor(private http: HttpClient) {}

    getisAuth(): boolean {
        return !!this.currentUser;
    }

    registerUser(registerData) {
        this.http.post(this.path + '/register', registerData, this.options).subscribe(res => {
            // navigate to login?
        });
    }

    loginUser(loginData) {
       this.http.post<any>(this.path + '/login', loginData, this.options).subscribe(res => {  // use interface for real projects
           localStorage.setItem('token', res.token);
           localStorage.setItem('user', res.user);
           this.currentUser = res.user;
           console.log(res.user);
       });
   }

   logoutUser() {
       localStorage.removeItem('token');
       localStorage.removeItem('user');
       this.currentUser = null;
   }

   setAuth() {
       const token = localStorage.getItem('token');
       const user = localStorage.getItem('user');

       if (token && user) {
           this.currentUser = user;
       }
    }
}
