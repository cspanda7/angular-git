import {NgModule} from '@angular/core'
import {Routes,RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { BranchComponent } from './pages/branch/branch.component';
import { HomeComponent } from './pages/Home/home.component';

const approute:Routes=[
  { path: 'branch', component: BranchComponent },
  { path: '',component: HomeComponent,pathMatch: 'full'
  },
  { path: '**', component: HomeComponent,pathMatch: 'full'},
  {path:'branch/:name',component:BranchComponent}
];
@NgModule({
 imports:[RouterModule.forRoot(approute)],
 exports:[RouterModule]
})

export class AppRoutingModule{

}