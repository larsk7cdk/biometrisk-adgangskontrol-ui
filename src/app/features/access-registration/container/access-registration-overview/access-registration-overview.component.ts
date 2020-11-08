import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccessRegistrationModule } from '../../access-registration.module';
import { AccessRegistrationService } from '../../services/access-registration.service';
import { AccessRegistrationsResponse } from '../../services/access-registration.service.interfaces';

@Component({
  selector: 'app-access-registration-overview',
  templateUrl: './access-registration-overview.component.html',
  styleUrls: ['./access-registration-overview.component.scss'],
})
export class AccessRegistrationOverviewComponent implements OnInit {
  accessRegistration$: Observable<AccessRegistrationsResponse>;

  constructor(private accessRegistrationService: AccessRegistrationService) {}

  ngOnInit(): void {
    this.accessRegistration$ = this.accessRegistrationService.get$();
  }
}
