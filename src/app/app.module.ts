import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import {FormsModule} from '@angular/forms';

import {ProfileService} from './services/profile.service';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { LandingComponent } from './landing/landing.component';
import { RouterModule, Routes } from '@angular/router';
//defining routes
const routes:Routes = [
  {path:"landing", component: LandingComponent};
  {path:"profile", component: ProfileComponent};
]

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SearchFormComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
