import { UsersServiceService } from './../../shared/users-service/users-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  form: FormGroup;

  teste: any;

  constructor(
    private _formBuilder: FormBuilder,
    private _http: HttpClient,
    private _userService: UsersServiceService
  ) {
    this.form = this._formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      celphone: [null, [
        Validators.required,
        Validators.maxLength(9),
        Validators.minLength(9)
      ]],
      avatar: [null]
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.form.patchValue({
      avatar: this._userService.getAvatarId()
    })

    this._userService.postUserContact(this.form).subscribe({
      next: data => {
        this.teste = data;
        console.log(data);
      },
      error: error => {
        console.error('There was an error!', error);
      }
    })
  }

  testeSub() {
    const max = 1000;
    const min = 0;
    console.log();
  }

}
