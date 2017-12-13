import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

/* Routing */
import { AppRoutingModule } from './app-routing.module';

/* Component */
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './shared/not-found.component';
import { MessageComponent } from './shared/message.component';

/* service */
import { MenuService, UserService } from './service/index.service';

/* Feature Modules */
import { DashboardModule } from './dashboard/dashboard.module';
import { LoginModule } from './login/login.module';
import { DemoModule } from './demo/demo.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,

    DashboardModule,
    LoginModule,
    DemoModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,

    PageNotFoundComponent,
    MessageComponent
  ],
  providers: [MenuService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    // console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}