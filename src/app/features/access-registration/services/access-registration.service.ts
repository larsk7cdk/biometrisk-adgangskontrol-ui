import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AccessRegistrationsResponse } from './access-registration.service.interfaces';

@Injectable({
  providedIn: 'root',
})
export class AccessRegistrationService {
  private readonly url = environment.accessRegistrationUrl;

  constructor(private httpClient: HttpClient) {}

  get$(): Observable<AccessRegistrationsResponse> {
    return this.httpClient.get<AccessRegistrationsResponse>(this.url);
  }
}
