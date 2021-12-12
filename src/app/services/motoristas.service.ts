import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MotoristasService {

  constructor(private httpClient:HttpClient) {}

  iniciarSesion(datos):Observable<any>{
    return this.httpClient.post(`http://localhost:8888/motoristas`, datos);
  }

  registrarse(datos):Observable<any>{
    return this.httpClient.post(`http://localhost:8888/motoristas/registrarse`, datos);
  }

  obtenerMotoristas():Observable<any>{
    return this.httpClient.get('http://localhost:8888/motoristas');
  }

  obtenerMotorista(idMotorista):Observable<any>{
    return this.httpClient.get(`http://localhost:8888/motoristas/${idMotorista}`);
  }

  obtenerHistorialEntregas(idMotorista):Observable<any>{
    return this.httpClient.get(`http://localhost:8888/motoristas/${idMotorista}/historial-entregas`);
  }

  obtenerOrdenesTomadas(idMotorista):Observable<any>{
    return this.httpClient.get(`http://localhost:8888/motoristas/${idMotorista}/ordenes-tomadas`);
  }

  actualizarImagen(idMotorista, imagen:File):Observable<any>{
    const formData = new FormData;
    formData.append('imagen', imagen);
    return this.httpClient.put(`http://localhost:8888/motoristas/${idMotorista}/actualizar-imagen`, formData);
  }

  actualizarDatos(idMotorista, datos):Observable<any>{
    return this.httpClient.put(`http://localhost:8888/motoristas/${idMotorista}/actualizar-datos`, datos);
  }

  actualizarContrasena(idMotorista, contrasena):Observable<any>{
    let dato={
      contrasena:contrasena
    }
    return this.httpClient.put(`http://localhost:8888/motoristas/${idMotorista}/actualizar-contrasena`, dato);
  }

  guardarOrden(idMotorista,data):Observable<any>{
    return this.httpClient.post(`http://localhost:8888/motoristas/${idMotorista}/ordenes-tomadas`, data);
  }

  cambiarEstado(idOrden, data):Observable<any>{
    return this.httpClient.put(`http://localhost:8888/motoristas/ordenes-tomadas/${idOrden}/cambiar-estado`, data);
  }
}
