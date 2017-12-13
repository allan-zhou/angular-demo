import { Component, OnInit, Input } from '@angular/core';
import { SimpleUser } from '../../../models/simple-user';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  @Input() users: SimpleUser[];

  constructor() { }

  ngOnInit() {
  }

}
