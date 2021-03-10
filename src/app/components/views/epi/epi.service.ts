import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Epi } from './epi.model';

@Injectable({
  providedIn: 'root'
})
export class EpiService {

  baseUrl : String = environment.baseUrl

  constructor(private http: HttpClient) { }

  findAllByCategoria(id_cat: String): Observable<Epi[]> {
    const url = `${this.baseUrl}/epis?categoria=${id_cat}`
    return this.http.get<Epi[]>(url)
  }

}
