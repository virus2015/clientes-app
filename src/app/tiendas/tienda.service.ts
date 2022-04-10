import { Injectable } from '@angular/core';
//import { TIENDAS } from './tiendas.json';
import { Tienda } from './tienda';
import {of,Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable()
export class TiendaService {
  private urlEndPoint: string = 'http://localhost:8080/api/tiendas';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})



  constructor(private http:HttpClient) { }

  getTiendas(): Observable<Tienda[]>{
  return this.http.get(this.urlEndPoint).pipe(
  map( response => response as Tienda[])
  );

  }


  create (tienda: Tienda) : Observable<Tienda>{

    return this.http.post<Tienda>(this.urlEndPoint,tienda, {headers: this.httpHeaders});
  }

  getTienda(id): Observable<Tienda>{
    return this.http.get<Tienda>(`${this.urlEndPoint}/${id}`)
  }


}
