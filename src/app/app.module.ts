import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { BranchComponent } from './pages/branch/branch.component';
import { HomeComponent } from './pages/Home/home.component';

import { DropdownDirective } from './shared/dropdown.directive';

import {ApiService} from "./services/api.service";
import {UserService} from "./services/user.service";
import {RepositoryService} from "./services/repo.service";
import {BranchService} from "./services/branch.service"



@NgModule({
  declarations: [
    AppComponent,
    BranchComponent,
    HeaderComponent,
    HomeComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ApiService, UserService,RepositoryService,BranchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
