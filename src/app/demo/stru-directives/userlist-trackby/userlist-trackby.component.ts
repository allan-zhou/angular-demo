import { Component, OnInit, Input, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { SimpleUser } from '../../../models/simple-user';

@Component({
  selector: 'app-userlist-trackby',
  templateUrl: './userlist-trackby.component.html',
  styleUrls: ['./userlist-trackby.component.css']
})
export class UserlistTrackbyComponent implements OnInit, OnChanges, OnDestroy {
  @Input() users: SimpleUser[];
  @Input() tempString: string;
  changeLog: Array<string> = [];

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit' + Date.now().toString());
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
    for (let propName in changes) {
      let chng = changes[propName];
      let cur = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
    console.log(this.changeLog);
  }

  ngOnDestroy() {
    console.log('OnDestroy');
  }

  trackByFn(index: number, item) {
    console.log(index + '-' + item);
  }
}
