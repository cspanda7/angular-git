import {NgModule} from '@angular/core'
import {Routes,RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { BranchComponent } from './pages/branch/branch.component';
import { HomeComponent } from './pages/Home/home.component';

const approute:Routes=[
  { path:'',redirectTo:'/login',pathMatch:'full'},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'branch', component: BranchComponent },
  { path:'branch/:name',component:BranchComponent },
];
@NgModule({
 imports:[RouterModule.forRoot(approute)],
 exports:[RouterModule]
})

export class AppRoutingModule{

}