import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attr-directives',
  templateUrl: './attr-directives.component.html',
  styleUrls: ['./attr-directives.component.css']
})
export class AttrDirectivesComponent implements OnInit {
  pClass = {};
  pStyle = {};
  isHightlight = true; //是否高亮
  isUnderline = true; //是否下划线
  isItalic = true; //是否斜体
  username = '';

  constructor() { }

  ngOnInit() {
    this.setParagraphClass();
    this.setParagraphStyle();
  }

  setParagraphClass() {
    this.pClass = {
      'font-style': this.isItalic,
      'background-color': this.isHightlight,
      'text-decoration': this.isUnderline
    }
  }

  setParagraphStyle() {
    this.pStyle = {
      'font-style': this.isItalic ? 'italic' : 'normal',
      'background-color': this.isHightlight ? 'gold' : 'none',
      'text-decoration': this.isUnderline ? 'underline' : 'none'
    }
  }

  toUpperName(name: string) {
    this.username = name.toUpperCase();
  }
}
