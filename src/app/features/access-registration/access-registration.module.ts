import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AccessRegistrationOverviewComponent } from './container/access-registration-overview/access-registration-overview.component';

@NgModule({
  declarations: [AccessRegistrationOverviewComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [AccessRegistrationOverviewComponent],
})
export class AccessRegistrationModule {}
