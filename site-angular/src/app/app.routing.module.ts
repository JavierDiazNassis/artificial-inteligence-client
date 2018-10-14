import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'people/list',
    component: PeopleListComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '**',
    component: LoginComponent
  },
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);