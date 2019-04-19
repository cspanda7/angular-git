import { Component,OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';

import {Repository} from "../../models/repository";
import {UserService} from "../../services/user.service";
import {RepositoryService} from "../../services/repo.service";
import {BranchService} from "../../services/branch.service"

@Component({
    selector:'app-home',
    templateUrl:'./home.component.html'   
})
export class HomeComponent implements OnInit{
    title = 'Welcome to Github';
    repos: Repository[] = [];

 constructor(private userService: UserService,private repositoryService:RepositoryService,private branchService:BranchService,
    private router:Router) {
    }

ngOnInit(){
     this.repositoryService.getRepos().subscribe(res => {
                this.repos=res as Repository[];
                console.log(res as Repository[]);
            });
}
 viewBranches(repo:Repository){
      this.router.navigate(['/branch'], { queryParams: { name: repo.full_name } });
    }

}