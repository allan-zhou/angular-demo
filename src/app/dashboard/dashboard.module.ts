import { NgModule } from '@angular/core';

/* Modules(Routing) */
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';

/* Component */
import { ProjectListComponent } from './project-list.component';

@NgModule({
    imports: [SharedModule, DashboardRoutingModule],
    declarations: [ProjectListComponent]
})

export class DashboardModule { };