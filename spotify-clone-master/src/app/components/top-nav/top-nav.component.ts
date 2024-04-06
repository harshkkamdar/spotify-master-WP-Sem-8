import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { SearchBarService } from 'src/app/services/searchbar.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

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

  onNavigateToIndex(){
    this.Router.navigate(['/']);
  }
}
