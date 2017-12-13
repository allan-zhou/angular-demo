import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from '../shared/layout.component';
import { ProjectListComponent } from '../dashboard/project-list.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                children: [
                    {
                        path: '',
                        component: ProjectListComponent
                    },
                    {
                        path: 'projects',
                        component: ProjectListComponent
                    }
                ]
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DashboardRoutingModule { }