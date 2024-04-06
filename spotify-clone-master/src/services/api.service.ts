import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public http: HttpClient,
  ) { }

  getsong(song: string): Observable<{}> {
    return this.http.get("http://localhost:3000/songsearch/"+song+"+youtube", {}).pipe(
      map((res) => res),
    );
  }
  getAlbums(): Observable<{}> {
    return this.http.get("http://localhost:3000/albums", {}).pipe(
      map((res) => res),
    );
  }
  getQueue(): Observable<{}> {
    return this.http.get("http://localhost:3000/queue", {}).pipe(
      map((res) => res),
    );
  }
  addToQueue(song: string): Observable<{}> {
    return this.http.post("http://localhost:3000/queue",song, {}).pipe(
      map((res) => res),
    );
  }
  albumToQueue(album: any): Observable<{}>{
    return this.http.post("http://localhost:3000/queue/populate",album, {}).pipe(
      map((res) => res),
    );
  }
  emptyQueue(): Observable<{}> {
    return this.http.delete("http://localhost:3000/queue/").pipe(
      map(res => res)
    );
  }
  addToAlbum(album:any): Observable<{}> {
    return this.http.patch("http://localhost:3000/albums/"+album.id, album, {}).pipe(
      map((res) => res),
    );
  }
  login(name: any): Observable<{}> {
    return this.http.get("http://localhost:3000/users/"+name, {}).pipe(
      map(res => res)
    );
  }

  signup(user: any): Observable<{}> {
    return this.http.post("http://localhost:3000/users", user, {}).pipe(
      map(res => res)
    );
  }

}
