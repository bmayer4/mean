import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    messages: any = [];
    users: any = [];
    path = environment.path;

    constructor(private http: HttpClient) {}

    getMessages(userId) {
        this.http.get(this.path + '/posts/user/' +  userId).subscribe(res => {
            this.messages = res;
        });
    }

    getMessage(id) {
        return this.http.get(this.path + '/posts/' +  id);
    }

    postMessage(message) {
        const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
        this.http.post(this.path + '/posts', message, options).subscribe(res => {
            //
        });
    }

    updateMessage(message) {  // really a post object
        const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
        this.http.patch(this.path + '/posts/' + message._id, message, options).subscribe(res => {
            //
        });
    }

    deleteMessage(id) {
        const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
        return this.http.delete(this.path + `/posts/${id}`, options);
    }

    getusers() {
        this.http.get(this.path + '/users').subscribe(res => {
            this.users = res;
        });
    }

    getuser(id: number) {
        return this.http.get(this.path + `/profile/${id}`);
    }

}
