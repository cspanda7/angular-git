import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../models/user";
import {ApiService} from "./api.service";
import {Repository} from "./models/repository";

@Injectable()
export class RepositoryService {

    constructor(private api: ApiService) {

    }

    getRepos(): Observable<Repository[]> {

        let endPoint = '/user/repos';

        return this.api.get(endPoint).map(res => res.json() as Repository[]).catch(err => Observable.throw(err));
    }

}
