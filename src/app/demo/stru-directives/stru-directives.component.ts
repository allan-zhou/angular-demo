import { Component, OnInit, AfterViewChecked, AfterViewInit, ViewChild, AfterContentInit, AfterContentChecked } from '@angular/core';
import _ from 'lodash';
import * as moment from 'moment';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { SimpleUser, SimpleUserData } from '../../models/simple-user';
import { UserlistTrackbyComponent } from './userlist-trackby/userlist-trackby.component';

@Component({
  selector: 'app-stru-directives',
  templateUrl: './stru-directives.component.html',
  styleUrls: ['./stru-directives.component.css']
})
export class StruDirectivesComponent implements OnInit, AfterViewChecked, AfterViewInit,AfterContentInit, AfterContentChecked {
  currentUser;
  htmlCodeGuardAgainst: SafeHtml;
  users: SimpleUser[];
  tempString: string;
  @ViewChild(UserlistTrackbyComponent) viewChild: UserlistTrackbyComponent;

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.currentUser = {
      name: 'admin'
    };

    this.getTrustHtmlCodeGuardAgainst();
    this.users = SimpleUserData;
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit  ' + moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'));
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked  ' + moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'));
    console.log(this.viewChild.users);
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit  ' + moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'));
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked  ' + moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'));
  }

  getTrustHtmlCodeGuardAgainst() {
    let html = `
      <div *ngIf="!currentUser">
      {{ hero.nickName }}
      </div>`;
    html = html.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    this.htmlCodeGuardAgainst = this.domSanitizer.bypassSecurityTrustHtml(html);
  }

  addUser() {
    var randomName = 'random' + Math.floor(Math.random() * 100);
    var user = { id: 3, name: randomName } as SimpleUser;
    this.users.push(user);
  }

  removeUser() {
    this.users.pop();
  }
}
