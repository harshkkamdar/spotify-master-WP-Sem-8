import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/services/api.service';
import { DomSanitizer } from '@angular/platform-browser';
import { SpotifyService } from 'src/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  songsearch: string = "";
  videoUrl: any;
  sanitizedUrl: any;
  songs: any[] = [];
  albums: any[] = [];
  selectedAlbum: string = "";
  searched:boolean = false;

  constructor(
    private router: Router,
    private api: ApiService,
    private domSanitizer: DomSanitizer,
    private spotify: SpotifyService
  ) {}

  onNavigateToSearch() {
    this.router.navigate(['/search']);
  }

  search() {
    this.api.getsong(this.songsearch).subscribe(async (res: any) => {
      console.log(res)
      this.songs = res
      /* this.videoUrl = res.links;
      this.videoUrl = this.videoUrl.replace("watch?v=", "embed/")
      this.sanitizedUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.videoUrl); */
    });
    this.searched = true;

    // Fetch albums from the backend
    this.api.getAlbums().subscribe((albums: any) => {
      this.albums = albums;
      console.log(albums)
    });
  }

  addToQueue(song: any) {
    let data = {
      name: song.title,
      link: song.links
    }
    console.log(data)
    song = data
    this.api.addToQueue(song).subscribe((res: any) => {
      console.log('Song added to queue:', res);
      // Optionally, you can show a message to the user indicating successful addition to queue
    });
  }

  addToAlbum(song: any, album:any, event: MouseEvent) {
    event.preventDefault();
    album.songs.push(song)
    console.log(song, album)
    this.api.addToAlbum(album).subscribe((res: any) => {
      console.log('Song added to album:', res);
      // Optionally, you can show a message to the user indicating successful addition to album
    });
  }
}
