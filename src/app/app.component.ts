import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { EventService } from './event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sweets';

  searchData =[];
  constructor(private _authService: AuthService, 
              private _eventService: EventService,
              private _router: Router) { }

  userSearchingItem() {
    this._eventService.searchItem(this.searchData)
    .subscribe(
        res => {
          
          this._router.navigate(['/search']);
        },
        err => console.log(err),
    )
  }

}
