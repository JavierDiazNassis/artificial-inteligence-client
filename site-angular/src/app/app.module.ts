import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { AppRoutingModule } from './app.routing.module';
import { LoginService } from './services/login.service';
import { RegisterService } from './services/register.service';
import { HttpClientModule } from '@angular/common/http';
import { PeopleComponent } from './components/people/people.component';
import { PeopleService } from './services/people.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PeopleComponent,
    PeopleListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    LoginService,
    RegisterService,
    PeopleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
