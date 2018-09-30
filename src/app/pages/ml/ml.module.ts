import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DirectivesModule } from '../../theme/directives/directives.module';
import { ConnectedMLStudioComponent } from './connected-ml-studio/connected-ml-studio.component';

export const routes = [
  { path: '', redirectTo: 'connected-ml-studio', pathMatch: 'full'},
  { path: 'connected-ml-studio', component:ConnectedMLStudioComponent, data: { breadcrumb: 'Connected ML Studio' } },
];

@NgModule({
  imports: [
    CommonModule,
    DirectivesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ConnectedMLStudioComponent
  ]
})
export class MlModule { }
