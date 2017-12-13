import { Component, OnInit, Input, OnChanges, SimpleChanges, OnDestroy, DoCheck } from '@angular/core';
import { SimpleUser } from '../../../models/simple-user';
import * as moment from 'moment';
import _ from 'lodash';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-userlist-trackby',
  templateUrl: './userlist-trackby.component.html',
  styleUrls: ['./userlist-trackby.component.css']
})
export class UserlistTrackbyComponent implements OnInit, OnChanges, OnDestroy, DoCheck {
  @Input() users: SimpleUser[];
  @Input() tempString: string;
  changeLog: string[] = [];
  oldUsers: SimpleUser[];
  usersChangeTimes: number = 0;

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit  ' + moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'));

    this.oldUsers = _.clone(this.users);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges  ' + moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'));

    for (let propName in changes) {
      let chng = changes[propName];
      let cur = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
    // console.log(this.changeLog);
  }

  ngOnDestroy() {
    console.log('OnDestroy  ' + moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'));
  }

  ngDoCheck() {
    console.log('ngDoCheck  ' + moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'));

    let usersChanged = false;

    let result = _.isEqual(this.users, this.oldUsers);
    if (!result) {
      console.log('users' + JSON.stringify(this.users));
      console.log('oldUsers' + JSON.stringify(this.oldUsers));
      usersChanged = true;
      this.usersChangeTimes += 1;
      this.oldUsers = _.clone(this.users);

      let msg = `users changes  ${this.usersChangeTimes} times.`;
      this.changeLog.push(msg);
    }
  }

  trackByFn(index: number, item) {
    console.log(index + '-' + item);
  }
}
