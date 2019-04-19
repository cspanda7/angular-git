import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {ApiService} from "./api.service";
import {Branch} from "../models/branch";

@Injectable()
export class BranchService {

    constructor(private api: ApiService) {

    }

    getBranches(repoName:string): Observable<Branch[]> {
        let endPoint = `/repos/${repoName}/branches`;

        return this.api.get(endPoint).map(res => res.json() as Branch[]).catch(err => Observable.throw(err));
    }
    createBranch(repoName:string,data): Observable<any>{
      let endPoint = `/repos/${repoName}/git/refs`;
      return this.api.post(endPoint,data).map(res => res.json()).catch(err => Observable.throw(err));
    }
    //get SHA ID from branch name
    getBranchReference(repoName:string,branchName:string): Observable<any>{
    let endPoint = `/repos/${repoName}/git/refs/heads/${branchName}`;
    return this.api.get(endPoint).map(res => res.json() as Branch[]).catch(err => Observable.throw(err));
    }

    getBranchCommits(repoName:string,commitId:string): Observable<any>{
    let endPoint = `/repos/${repoName}/git/commits/${commitId}`;
    return this.api.get(endPoint).map(res => res.json() as Branch[]).catch(err => Observable.throw(err));
    }
    searchByBranchName(repoName:string,searchName:string): Observable<any>{
    let endPoint = `/repos/${repoName}/git/refs/heads/${searchName}`;
    return this.api.get(endPoint).map(res => res.json()).catch(err => Observable.throw(err));
    }

}
