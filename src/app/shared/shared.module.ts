import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

/* Component */
import { LayoutComponent } from './layout.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [LayoutComponent],
    exports: [CommonModule, LayoutComponent]
})

export class SharedModule { }