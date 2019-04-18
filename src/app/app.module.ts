import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BranchComponent } from './pages/branch/branch.component';

import {ApiService} from "./services/api.service";
import {UserService} from "./services/user.service";
import {RepositoryService} from "./services/repo.service";
import {BranchService} from "./services/branch.service"

const appRoutes: Routes = [
  { path: 'branch', component: BranchComponent },
  { path: '',
    component: AppComponent,
    pathMatch: 'full'
  },
  { path: '**', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BranchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [ApiService, UserService,RepositoryService,BranchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
