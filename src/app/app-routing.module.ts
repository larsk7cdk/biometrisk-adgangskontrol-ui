import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverblikComponent } from './features/medarbejder/container/overblik/overblik.component';

const routes: Routes = [
  {
    path: '',
    component: OverblikComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
