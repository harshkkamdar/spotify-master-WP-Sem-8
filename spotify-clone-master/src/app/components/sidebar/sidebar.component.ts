import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { SearchBarService } from 'src/app/services/searchbar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public isSearchVisible:boolean=false;

  constructor(private Router:Router, private sb:SearchBarService){}

  ngOnInit(): void {
    this.sb.isSearchVisible.subscribe(status => {
      this.isSearchVisible = status;
    });
  }

  onNavigateToLogin(){
    this.Router.navigate(['/','login']);
  }

  onNavigateToReg(){
    this.Router.navigate(['/','signup']);
  }

  onNavigateToHome(){
    this.Router.navigate(['/','home']);
  }

  onNavigation(pageName:string){
    if(pageName === 'search'){
      this.sb.isSearchVisible.next(true);
    }else{
      this.sb.isSearchVisible.next(false);
    }
    
  }
}
