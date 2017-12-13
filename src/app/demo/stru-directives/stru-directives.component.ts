import { Component, OnInit } from '@angular/core';
import _ from 'lodash';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { SimpleUser, SimpleUserData } from '../../models/simple-user';

@Component({
  selector: 'app-stru-directives',
  templateUrl: './stru-directives.component.html',
  styleUrls: ['./stru-directives.component.css']
})
export class StruDirectivesComponent implements OnInit {
  currentUser;
  htmlCodeGuardAgainst: SafeHtml;
  users: SimpleUser[];
  tempString: string;

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.currentUser = {
      name: 'admin'
    };

    this.getTrustHtmlCodeGuardAgainst();
    this.users = SimpleUserData;
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
}
