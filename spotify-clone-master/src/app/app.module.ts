import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { PlaylestComponent } from './pages/playlest/playlest.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { SongCardComponent } from './components/song-card/song-card.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { ButtonComponent } from './components/button/button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SongComponent } from './pages/song/song.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { HttpClientModule } from '@angular/common/http';
import { SpotifyService } from 'src/services/spotify.service';
import { ApiService } from 'src/services/api.service';
import { LibraryComponent } from './pages/library/library.component';
import { QueueComponent } from './pages/queue/queue.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    PlaylestComponent,
    SignupComponent,
    LoginComponent,
    SongCardComponent,
    TopNavComponent,
    ButtonComponent,
    SidebarComponent,
    SongComponent,
    ErrorPageComponent,
    LibraryComponent,
    QueueComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SpotifyService, ApiService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
