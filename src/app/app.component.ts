import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { EventService } from './event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sweets';

  constructor(private _authService: AuthService, 
              private _eventService: EventService) { }


}
