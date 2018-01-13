import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ProfileService} from './services/profile.service';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
