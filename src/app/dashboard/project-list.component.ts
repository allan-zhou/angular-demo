import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operator/map';

@Component({
    selector: 'app-project-list',
    templateUrl: './project-list.component.html',
    styleUrls: ['./project-list.component.css']
})

export class ProjectListComponent implements OnInit {
    tips: string = '';
    urlParams: string = ''
    fontSize: number = 10;

    constructor(private activatedRouted: ActivatedRoute) { }

    ngOnInit() {
        this.urlParams = this.activatedRouted.snapshot.url.toString();
    }
}