import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Vehiculo} from "../model/vehiculo";

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  private readonly apiUrl: string = environment.baseUrl + 'https://gist.githubusercontent.com/josejbocanegra/17bb8c76405e43655d551a90800c8a81/raw/d41b4acc3457e51e7533fad6d5e9925ee9676457/202212_MISW4104_Grupo1.json';

  constructor(private _http: HttpClient) { }

  getVehiculos(): Observable<Vehiculo[]> {
    return this._http.get<Vehiculo[]>(this.apiUrl);
  }
}
