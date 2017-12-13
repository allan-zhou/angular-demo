import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/* Modules(Routing) */
import { DemoRoutingModule } from './demo-routing.module';
import { SharedModule } from '../shared/shared.module';

/* Component */
import { LayoutComponent as DemoLayoutComponent } from './layout/layout.component';
import { DemoComponent } from './demo/demo.component';
import { SizerComponent } from './sizer/sizer.component';
import { StruDirectivesComponent } from './stru-directives/stru-directives.component';
import { AttrDirectivesComponent } from './attr-directives/attr-directives.component';
import { UserlistComponent } from './stru-directives/userlist/userlist.component';
import { UserlistTrackbyComponent } from './stru-directives/userlist-trackby/userlist-trackby.component';

@NgModule({
  imports: [SharedModule, DemoRoutingModule, FormsModule],
  declarations: [
    DemoLayoutComponent,
    DemoComponent,
    SizerComponent,
    StruDirectivesComponent,
    AttrDirectivesComponent,
    UserlistComponent,
    UserlistTrackbyComponent
  ]
})

export class DemoModule { }