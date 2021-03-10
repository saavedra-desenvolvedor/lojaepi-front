import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Epi } from './epi.model';

@Injectable({
  providedIn: 'root'
})
export class EpiService {

  baseUrl : String = environment.baseUrl

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAllByCategoria(id_cat: String): Observable<Epi[]> {
    const url = `${this.baseUrl}/epis?categoria=${id_cat}`
    return this.http.get<Epi[]>(url)
  }

  findById(id: String):Observable<Epi>{
    const url = `${this.baseUrl}/epis/${id}`
    return this.http.get<Epi>(url)
  }

  update(epi: Epi):Observable<Epi> {
    const url = `${this.baseUrl}/epis/${epi.id}`
    return this.http.put<Epi>(url, epi)
  }  

  create (epi: Epi, id_cat: String): Observable<Epi> {
    const url = `${this.baseUrl}/epis?categoria=${id_cat}`
    return this.http.post<Epi>(url, epi)
  }

  delete(id: String):Observable<void> {
    const url = `${this.baseUrl}/epis/${id}`
    return this.http.delete<void>(url)
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }

}
