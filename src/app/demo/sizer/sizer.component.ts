import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'demo-sizer',
  templateUrl: './sizer.component.html',
  styleUrls: ['./sizer.component.css']
})

export class SizerComponent implements OnInit {
  @Input() size: number = 14;
  @Output() sizeChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit() { }

  inc() {
    this.resize(+1);
  }
  dec() {
    this.resize(-1);
  }

  resize(i: number) {
    console.log(i);
    this.size = Math.min(30, Math.max(10, this.size + i));
    this.sizeChange.emit(this.size);
  }
}
