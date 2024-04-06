import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  albums: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums() {
    this.apiService.getAlbums().subscribe((albums: any) => {
      this.albums = albums;
    });
  }

  setAsQueue(album: any) {
    console.log('Setting album as queue:', album.songs);
    let dataToSend:any = [];
    album.songs.forEach((element: any) => {
      let data = {
        name: element.title,
        link: element.links
      }
      dataToSend.push(data);
    });
    console.log(dataToSend)
    this.apiService.emptyQueue().subscribe(res=>{
      this.apiService.albumToQueue(dataToSend).subscribe(res=>{
        console.log(res)
      });
    })
  }

  addToQueue(song: any) {
    console.log('Adding song to queue:', song);
      let data = {
        name: song.title,
        link: song.links
      }
      song = data;
    this.apiService.addToQueue(song).subscribe(res=>{
      console.log(res);
    })
  }

  removeFromAlbum(song: any, album: any) {
    const index = album.songs.findIndex((s: any) => s.title === song.title);
    if (index !== -1) {
      album.songs.splice(index, 1);
      console.log('Song removed from album:', song);
      this.apiService.addToAlbum(album).subscribe((res: any) => {
        console.log('Song removed to album:', res);
      });
    }
/*     album.songs.push(song)
    console.log(song, album)
    album = album.filter((item: any) => item.song !== idToRemove);
    this.apiService.addToAlbum(album).subscribe((res: any) => {
      console.log('Song removed to album:', res);
    }); */
  }
}
