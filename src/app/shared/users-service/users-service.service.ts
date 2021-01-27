import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {
  url: string;
  httpOptions: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private _http: HttpClient) {
    this.url = 'http://localhost:3000/contacts'
  }

  getUserContacts() {
    return this._http.get(this.url);
  }

  postUserContact(form: FormGroup) {

    return this._http.post<any>(this.url, JSON.stringify(form.value), this.httpOptions);
  }

  getAvatarId(): string {
    const max = 1000;
    const min = 0;
    let randomNumber: number = Math.floor(Math.random() * (max - min) + min);
    return `https://picsum.photos/id/${randomNumber}/64`;
  }

  deleteUserContact(id: number) {
    return this._http.delete(`${this.url}/${id}`, this.httpOptions);
  }

}
