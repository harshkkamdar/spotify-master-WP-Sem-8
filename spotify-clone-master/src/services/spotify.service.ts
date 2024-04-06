import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class SpotifyService {
    private searchUrl: string | undefined;
    private artistUrl: string | undefined;
    private albumsUrl: string | undefined;
    private albumUrl: string | undefined;

    constructor(private httpClient: HttpClient) {
    }

    searchMusic(str: string, type = 'artist'): Observable<any> {
        this.searchUrl = `https://api.spotify.com/v1/search?query=${str}&offset=0&limit=20&type=${type}&market=US`;
        return this.httpClient.get(this.searchUrl)
            .pipe(map((res: any) => res));
    }

    getArtist(id: string): Observable<any> {
        this.artistUrl = `https://api.spotify.com/v1/artists/${id}`;
        return this.httpClient.get(this.artistUrl)
            .pipe(map((res: any) => res));
    }

    getAlbums(artistId: string): Observable<any> {
        this.albumsUrl = `https://api.spotify.com/v1/artists/${artistId}/albums`;
        return this.httpClient.get(this.albumsUrl)
            .pipe(map((res: any) => res));
    }

    getAlbum(id: string): Observable<any> {
        this.albumUrl = `https://api.spotify.com/v1/albums/${id}`;
        return this.httpClient.get(this.albumUrl)
            .pipe(map((res: any) => res));
    }
}
