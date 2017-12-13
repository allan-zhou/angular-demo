import { Injectable } from '@angular/core';

import { Menu, MenuData } from '../models/menu';

@Injectable()
export class MenuService {
    getMenus(): Promise<Menu[]> {
        return new Promise(resolve => {
            resolve(MenuData);
        })
    }
}