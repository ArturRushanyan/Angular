import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { EventService } from '../event.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {}
  constructor(private _auth: AuthService,
              private _router: Router,
              private _event: EventService) { }

  ngOnInit() {
  }

  loginUser() {
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this._router.navigate(['/item']);
        // if(res.user.role == 'admin') {
        //   console.log(res);
        //   localStorage.setItem('token', res.token);
        //   this._router.navigate(['/item']);
        // } else {
        //   err => console.log('You are not admin' || err);
        // }
      },
      err => console.log(err),
    )
  }

}
