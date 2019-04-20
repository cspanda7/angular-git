import {Injectable} from '@angular/core';
import {Headers, Http, Response, RequestOptionsArgs,} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class LoginService {

    constructor(private api: Http) {

    }

    login(): Observable<any> {

        let endPoint = 'https://github.com/login/oauth/authorize';

        return this.api.get(endPoint).map(res => res.json() as any).catch(err => Observable.throw(err));
    }

}
