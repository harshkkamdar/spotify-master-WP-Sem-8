import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { SearchBarService } from 'src/app/services/searchbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
  public songCards1 = [
    {song_id:1,
      thumbnail: "https://mosaic.scdn.co/640/ab67616d0000b273063c048e9ef6bd021b744756ab67616d0000b2737fcded053b9120228e643d86ab67616d0000b27380368f0aa8f90c51674f9dd2ab67616d0000b273f461bbc21a9bcec43a926973",
      title:"Romantic Songs",
      description: "Relax and peacefull love somgs",
      song_link: "assets/Bliss.mp3",
    },
    {song_id:2,
      thumbnail: "https://images.unsplash.com/photo-1588066077857-70494c21533c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWMlMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D",
      title:"Romantic Songs",
      description: "Relax and peacefull love somgs"
    },
    {song_id:3,
      thumbnail: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bXVzaWMlMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D",
      title:"Romantic Songs",
      description: "Relax and peacefull love somgs"
    },
    {song_id:4,
      thumbnail: "https://images.unsplash.com/photo-1516916759473-600c07bc12d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG11c2ljJTIwY292ZXJ8ZW58MHx8MHx8fDA%3D",
      title:"Romantic Songs",
      description: "Relax and peacefull love somgs"
    },
    {song_id:5,
      thumbnail: "https://images.unsplash.com/photo-1526739178209-77cd6c6bcf4f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fG11c2ljJTIwY292ZXJ8ZW58MHx8MHx8fDA%3D",
      title:"Romantic Songs",
      description: "Relax and peacefull love somgs"
    },
    {song_id:6,
      thumbnail: "https://images.unsplash.com/photo-1471275287446-f463543ee84f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fG11c2ljJTIwY292ZXJ8ZW58MHx8MHx8fDA%3D",
      title:"Romantic Songs",
      description: "Relax and peacefull love somgs"
    },
    {song_id:7,
      thumbnail: "https://images.unsplash.com/photo-1446057032654-9d8885db76c6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fG11c2ljJTIwY292ZXJ8ZW58MHx8MHx8fDA%3D",
      title:"Romantic Songs",
      description: "Relax and peacefull love somgs"
    },
    {song_id:8,
      thumbnail: "https://plus.unsplash.com/premium_photo-1663133939398-d88bfcd19aac?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fG11c2ljJTIwY292ZXJ8ZW58MHx8MHx8fDA%3D",
      title:"Romantic Songs",
      description: "Relax and peacefull love somgs"
    },
    {song_id:9,
      thumbnail: "https://images.unsplash.com/photo-1598387180687-9be7e316796d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fG11c2ljJTIwY292ZXJ8ZW58MHx8MHx8fDA%3D",
      title:"Romantic Songs",
      description: "Relax and peacefull love somgs"
    }
  ] 

  public songCards2 = [
    {song_id:10,
      thumbnail: "https://i.scdn.co/image/ab6761610000e5ebcd554374b04b93068d7e7f52",
      title:"Kid On The Block",
      description: "Music Composer Jonatas Centeno"
    },
    {song_id:11,
      thumbnail: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fG11c2ljJTIwY292ZXJ8ZW58MHx8MHx8fDA%3D",
      title:"Romantic Songs",
      description: "Relax and peacefull love somgs"
    },
    {song_id:12,
      thumbnail: "https://images.unsplash.com/photo-1538498871973-d4fa46f72c4a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxtdXNpYyUyMGNvdmVyfGVufDB8fDB8fHww",
      title:"Romantic Songs",
      description: "Relax and peacefull love somgs"
    },
    {song_id:13,
      thumbnail: "https://images.unsplash.com/photo-1591522352537-9b1a6c97a5b7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgyfHxtdXNpYyUyMGNvdmVyfGVufDB8fDB8fHww",
      title:"Romantic Songs",
      description: "Relax and peacefull love somgs"
    },
    {song_id:14,
      thumbnail: "https://images.unsplash.com/photo-1516900557549-41557d405adf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTkyfHxtdXNpYyUyMGNvdmVyfGVufDB8fDB8fHww",
      title:"Romantic Songs",
      description: "Relax and peacefull love somgs"
    },
    {song_id:15,
      thumbnail: "https://images.unsplash.com/photo-1488376739361-ed24c9beb6d0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk0fHxtdXNpYyUyMGNvdmVyfGVufDB8fDB8fHww",
      title:"Romantic Songs",
      description: "Relax and peacefull love somgs"
    },
    {song_id:16,
      thumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjEwfHxtdXNpYyUyMGNvdmVyfGVufDB8fDB8fHww",
      title:"Romantic Songs",
      description: "Relax and peacefull love somgs"
    },
    {song_id:17,
      thumbnail: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjEzfHxtdXNpYyUyMGNvdmVyfGVufDB8fDB8fHww",
      title:"Romantic Songs",
      description: "Relax and peacefull love somgs"
    },
    {song_id:18,
      thumbnail: "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjM1fHxtdXNpYyUyMGNvdmVyfGVufDB8fDB8fHww",
      title:"Romantic Songs",
      description: "Relax and peacefull love somgs"
    }
  ] 

  constructor(private Router:Router, private sb:SearchBarService){}
  
  ngOnInit(): void {}



  onNavigation(pageName:string){
    if(pageName === 'search'){
      this.sb.isSearchVisible.next(true);
    }else{
      this.sb.isSearchVisible.next(false);
    }
    
  }

}
