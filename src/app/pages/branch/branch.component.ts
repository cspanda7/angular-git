import {Component, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {Observable} from "rxjs";
import {NgForm} from '@angular/forms';
import {Branch} from "../../models/branch";
import {BranchService} from "../../services/branch.service"


@Component({
    selector: 'app-branch',
    templateUrl: './branch.component.html'
})
export class BranchComponent implements OnInit {
    title = 'Github - Branch';
    Branches: Branch[] = [];
    headName:string="";
    sha:string='';
    constructor(private branchService:BranchService) {
      
    }

    ngOnInit() {
        this.branchService.getBranches('cspanda7/angular-git').subscribe(res => {
                this.Branches=res as Branch[];
                console.log(res as Branch[]);
            });
    }
    featureBranch(){
      this.headName='develop';
      this.getSHA('develop'); 
    }
    bugBranch(){
      this.headName='release/QA';
      this.getSHA('release/QA'); 
    }
    hotfixBranch(){
      this.headName='master';
      this.getSHA('master'); 
    }
    getSHA(bType:string){
      let currentBranch=this.Branches.filter(branch=>branch.name=="master");
      this.sha= currentBranch.map(a => a.commit.sha).toString();
      console.log(this.sha);
    }
    onSubmit(form:NgForm){
      console.log(form.value.branchName);
      console.log(this.sha);
      let data = {
	      "ref": `refs/heads/${form.value.branchName}`,
	      "sha": this.sha
	    }
       this.branchService.getBranchReference('cspanda7/angular-git',this.headName).subscribe(res => {
                console.log(res );
            });
      // this.branchService.createBranch('cspanda7/angular-git',data).subscribe(res => {
      //           console.log(res);
      //       },
      //       (err)=>console.log(err)
      //       );
    }
}
