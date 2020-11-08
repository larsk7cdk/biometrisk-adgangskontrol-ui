import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessRegistrationOverviewComponent } from './features/access-registration/container/access-registration-overview/access-registration-overview.component';

const routes: Routes = [
  {
    path: '',
    component: AccessRegistrationOverviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
