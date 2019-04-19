import {Component, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {Observable} from "rxjs";
import {NgForm} from '@angular/forms';
import {Branch} from "../../models/branch";
import {BranchService} from "../../services/branch.service"
import { ActivatedRoute,Params,Router } from '@angular/router';

@Component({
    selector: 'app-branch',
    templateUrl: './branch.component.html'
})
export class BranchComponent implements OnInit {
    title = 'Github - Branch';
    Branches: Branch[] = [];
    headName:string="";
    sha:string='';
    repoName:string='';
    branchPrefix:string='';
     // change commi
    constructor(private branchService:BranchService,
    private route:ActivatedRoute,private router:Router) {
      
    }

    ngOnInit() {
      this.route.queryParams.subscribe(
      (params:Params)=>{
        this.repoName=params["name"];
        console.log(this.repoName);
         this.branchService.getBranches(this.repoName).subscribe(res => {
                this.Branches=res as Branch[];
                console.log(res as Branch[]);
            });
      }
    )
       
    }
    featureBranch(){
      this.headName='develop';
      this.getSHA('develop'); 
      this.getBranchPrefix('feature');
    }
    bugBranch(){
      this.headName='release/QA';
      this.getSHA('release/QA'); 
      this.getBranchPrefix('bug');
    }
    hotfixBranch(){
      this.headName='master';
      this.getSHA('master'); 
      this.getBranchPrefix('hotfix');
    }
    getBranchPrefix(searchKey:string){
      this.branchService.searchByBranchName(this.repoName,searchKey).subscribe(res => {        
                console.log(res);
                this.branchPrefix=`${searchKey}/ime${res.length+1}-`
            },(err)=>this.branchPrefix=`${searchKey}/ime${1}-`);
    }
    getSHA(bType:string){
      let currentBranch=this.Branches.filter(branch=>branch.name==bType);
      this.sha= currentBranch.map(a => a.commit.sha).toString();
      console.log(this.sha);
      //  this.branchService.getBranchReference('cspanda7/angular-git',bType).subscribe(res => {
      //           console.log(res);
      //       });
        this.branchService.getBranchCommits(this.repoName,this.sha).subscribe(res => {
                console.log(res);
            });

    }
    onSubmit(form:NgForm){
      console.log(form.value.branchName);
      console.log(this.sha);
      let data = {
	      "ref": `refs/heads/${this.branchPrefix}${form.value.branchName}`,
	      "sha": this.sha
	    }
      //  this.branchService.getBranchReference('cspanda7/angular-git',this.headName).subscribe(res => {
      //           console.log(res );
      //       });
      this.branchService.createBranch(this.repoName,data).subscribe(res => {
                console.log(res);
            },
            (err)=>console.log(err)
            );
    }
}
