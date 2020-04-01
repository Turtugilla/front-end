import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Automovil } from './models';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators'
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class AutosService {
  private autosURL = 'https://catalogo-autos.herokuapp.com/api/autos/';
  private autosActionsURL = 'https://catalogo-autos.herokuapp.com/api/autos'

  constructor(private http: HttpClient, private messagesService: MessagesService) { }

  getAutos(): Observable<any> {
    return this.http.get<any>(this.autosURL).pipe(
      tap({ complete: () => this.messagesService.add('Productos Obtenidos') }),
      catchError(this.handleError<any>('getAutos'))
    )
  }


  addAuto(auto: Automovil): Observable<any> {
    return this.http.post<any>(this.autosActionsURL, auto);
  }


  updateAutos(auto: Automovil): Observable<any> {
    return this.http.put<any>(`${this.autosActionsURL}/${auto._id}`, auto);
  }


  deleteAuto(auto: Automovil): Observable<any> {
    return this.http.delete<any>(`${this.autosActionsURL}/${auto._id}`);
  }

  private handleError<T>(operation = 'operación', result?: T) {
    return (error: any): Observable<T> => {
      this.messagesService.add(`${operation} fallo: ${error.message}`);
      return of(result as T);
    }
  }
}
