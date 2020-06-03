import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Usuario } from './usuario';  


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = 'http://localhost:65389/Api/Usuario';  
  constructor(private http: HttpClient) { }  
  getAllUsuario(): Observable<Usuario[]> {  
    return this.http.get<Usuario[]>(this.url + '/GetAllUsuarios');  
  }  
  getUsuarioById(Id: number): Observable<Usuario> {  
    return this.http.get<Usuario>(this.url + '/GetUsuarioId/' + Id);  
  }  
  createUsuario(usuario: Usuario): Observable<Usuario> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<Usuario>(this.url + '/InsertUsuario/',  
    usuario, httpOptions);  
  }  
  updateUsuario(usuario: Usuario): Observable<Usuario> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put<Usuario>(this.url + '/UpdateUsuario/',  
    usuario, httpOptions);  
  }  
  deleteUsuarioById(id: number): Observable<number> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.delete<number>(this.url + '/DeleteUsuario?id=' +id,  
 httpOptions);  
  }  
}
