import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService, UserService } from '../service/index.service';
import { Menu } from '../models/index';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})

export class LayoutComponent implements OnInit {
  currentUser: string;
  menus: Menu[];

  constructor(
    private menuService: MenuService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getCurrentUser();
    this.getMenus();
  }

  getCurrentUser() {
    this.currentUser = this.userService.getCurrentUser();
    if (!this.currentUser) {
      this.logout();
    }
  }

  getMenus(): void {
    this.menuService.getMenus().then((data) => {
      this.menus = data;
    })
  }

  logout(): void {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
