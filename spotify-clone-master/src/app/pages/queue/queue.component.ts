import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';
import { DomSanitizer } from '@angular/platform-browser';
import { SpotifyService } from 'src/services/spotify.service';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})
export class QueueComponent implements OnInit {
  queueItems: any[] = [];
  sanitizedUrl: any;
  videoUrl: any;

  constructor(private apiService: ApiService,private domSanitizer: DomSanitizer,
    private spotify: SpotifyService) { }

  ngOnInit(): void {
    this.getQueue();
  }

  getQueue() {
    // Fetch queue items from the API
    this.apiService.getQueue().subscribe((items: any) => {
      this.queueItems = items;
    });
    
    // Fetch and set the URL for the iframe
    this.sanitizedUrl = this.getSanitizedUrl('YOUR_VIDEO_URL');
  }

  playItem(item: any) {
    // Perform the action to play the selected item
    console.log('Playing:', item);
    this.videoUrl = item.link;
    this.videoUrl = this.videoUrl.replace("watch?v=", "embed/")
    this.sanitizedUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
  }

  getSanitizedUrl(url: string) {
    // Perform any sanitation needed for the URL
    // For example, using Angular's DomSanitizer
    // You can implement this as per your requirement
    return url;
  }
}
