import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
// const endpoint = environment.API_ENOPOINT;

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  

}
