import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  env = environment;

  constructor(
    private httpClient: HttpClient,
  ) { }



  public getAllPokemons(): Observable<any> {
    const api_base = this.env.apibaseurl;
    return this.httpClient.get(api_base);
  }


}
