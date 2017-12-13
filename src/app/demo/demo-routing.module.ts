import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from '../shared/layout.component';
import { LayoutComponent as DemoLayoutComponent } from './layout/layout.component';
import { DemoComponent } from './demo/demo.component';
import { SizerComponent } from './sizer/sizer.component';
import { StruDirectivesComponent } from './stru-directives/stru-directives.component';
import { AttrDirectivesComponent } from './attr-directives/attr-directives.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                component: DemoLayoutComponent,
                children: [
                    {
                        path: 'sizer',
                        component: SizerComponent
                    },
                    {
                        path: 'attr-directives',
                        component: AttrDirectivesComponent
                    },
                    {
                        path: 'stru-directives',
                        component: StruDirectivesComponent
                    },
                    {
                        path: 'home',
                        component: DemoComponent
                    },
                    {
                        path: '',
                        redirectTo: 'home',
                        pathMatch: 'full'
                    }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DemoRoutingModule { }