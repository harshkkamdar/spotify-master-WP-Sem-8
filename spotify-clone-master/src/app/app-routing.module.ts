import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SearchComponent } from './pages/search/search.component';
import { SongComponent } from './pages/song/song.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { LibraryComponent } from './pages/library/library.component';
import { QueueComponent } from './pages/queue/queue.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: '', component: LoginComponent },
  {path: 'login', component: LoginComponent },
  {path: 'signup', component:SignupComponent},
  {path: 'search', component:SearchComponent},
  {path: 'library', component:LibraryComponent},
  {path: 'queue', component:QueueComponent},
  {path:'song/:song_id', component:SongComponent},
  {path:'**',component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
