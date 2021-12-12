import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdenesDisponiblesService {

  constructor(private httpClient:HttpClient) { }
  
  obtenerOrdenesDisponibles():Observable<any>{
    return this.httpClient.get('http://localhost:8888/ordenes-disponibles');
  }

  borrarOrden(idOrden):Observable<any>{
    console.log(idOrden);
    return this.httpClient.delete(`http://localhost:8888/ordenes-disponibles/${idOrden}`);
  }

}
