import { Component, OnInit } from '@angular/core';

import { UsersServiceService } from './../../shared/users-service/users-service.service';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  allContacts: any = [];

  constructor(
    private _contacts: UsersServiceService
  ) { }

  ngOnInit(): void {
    this._contacts.getUserContacts().subscribe(data => this.allContacts = data);
  }

  deleteUser(id: number): void {
    this._contacts.deleteUserContact(id).subscribe();
    this._contacts.getUserContacts().subscribe(data => this.allContacts = data);
  }

}
