import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule} from './auth.module'
import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { BranchComponent } from './pages/branch/branch.component';
import { HomeComponent } from './pages/Home/home.component';

import { DropdownDirective } from './shared/dropdown.directive';

import { AUTH_PROVIDERS } from 'angular2-jwt';
import {LoginService} from "./services/login.service";
import {ApiService} from "./services/api.service";
import {UserService} from "./services/user.service";
import {RepositoryService} from "./services/repo.service";
import {BranchService} from "./services/branch.service"
import { AuthGuard } from './shared/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    BranchComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [AUTH_PROVIDERS,LoginService,ApiService, UserService,RepositoryService,BranchService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
