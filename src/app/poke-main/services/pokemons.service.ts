import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  private pokemonsUrl = 'api/pokemons';  // URL to web api

  constructor(private http: HttpClient) { }

   /** GET - pokemons desde el servidor */
  getPokemons (): Observable<any[]> {
    return this.http.get<any[]>(this.pokemonsUrl)
      .pipe(
        tap(pokemons => console.log('Obtiene los pokemons')),
        catchError(this.handleError('getPokemons', []))
      );
  }

  /** GET - pokemons por titulo desde el servidor */
  getPokemonsByTittle(tittle: string): Observable<any[]> {
      return this.http.get<any[]>(`${this.pokemonsUrl}/?id=${tittle}`)
        .pipe(
          tap(pokemons => console.log(`Obtiene los pokemons by tittle: ${tittle}`)),
          catchError(this.handleError('getPokemonsByTittle', []))
        );
    }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
