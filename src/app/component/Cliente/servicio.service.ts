import { Injectable } from '@angular/core';
import {Cliente} from '../Cliente/cliente';
import { Observable } from 'rxjs';


import { environment } from '../../../environments/environment';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

    private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
    
    private urlApi: string = 'http://localhost:8080/api/'
  constructor(private http:HttpClient) { }

    getClientes():Observable<Cliente[]>{
           return this.http.get<Cliente[]>(this.urlApi + 'clientes');
           
    }

    createCliente(cliente: Cliente):Observable<Cliente>{
          return this.http.post<Cliente>(this.urlApi + 'guardar',cliente,{headers: this.httpHeaders})
    }

    getClienteId(id:any):Observable<Cliente[]>{
      return this.http.get<Cliente[]>(`${this.urlApi}/${id}`);
    }

    updateCliente(cliente: Cliente):Observable<Cliente[]>{
      return this.http.put<Cliente[]>(`${this.urlApi}/${cliente.clienteID}`,cliente,{headers: this.httpHeaders});
    }
}
