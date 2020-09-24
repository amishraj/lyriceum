import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SavedlyricsbarComponent } from './savedlyricsbar/savedlyricsbar.component';
import { SongComponent } from './song/song.component';
import { SongdetailsComponent } from './song/songdetails/songdetails.component';
import { LyricsComponent } from './song/lyrics/lyrics.component';
import { SidenoteComponent } from './savedlyricsbar/sidenote/sidenote.component';
import { SavedlyricspageComponent } from './savedlyricspage/savedlyricspage.component';
import { NoteComponent } from './savedlyricspage/note/note.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SavedlyricsbarComponent,
    SongComponent,
    SongdetailsComponent,
    LyricsComponent,
    SidenoteComponent,
    SavedlyricspageComponent,
    NoteComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
