import { Component,OnInit, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.css']
})
export class SongCardComponent implements OnInit{ 
  @Input() public playlistThumbnail!: string;
  @Input() public title!: string;
  @Input() public description!: string;
  @Input() public id!: string | number;


  constructor(private router:Router) {
    
  }
  ngOnInit(): void {}

  onNavigateToSong(){
    this.router.navigateByUrl(`/song/${this.id}`);
  }
}
