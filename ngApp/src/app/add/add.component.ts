import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  addUserData = {}
  constructor(private _event: EventService) { }

  ngOnInit() {
  }

  addData() {
    this._event.addItem(this.addUserData)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      )
  }

}
