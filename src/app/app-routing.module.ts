import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Components */
import { PageNotFoundComponent } from './shared/not-found.component';
import { MessageComponent } from './shared/message.component';

/* Feature Modules */
import { DashboardModule } from './dashboard/dashboard.module';
import { DemoModule } from './demo/demo.module';

export const routes: Routes = [
    { path: 'message', component: MessageComponent, outlet: 'popup' },
    { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },
    { path: 'demo', loadChildren: 'app/demo/demo.module#DemoModule' },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: false })],
    exports: [RouterModule]
})

export class AppRoutingModule { }