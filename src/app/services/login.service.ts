import {Injectable} from '@angular/core';
import {Headers, Http, Response, RequestOptionsArgs,RequestOptions} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class LoginService {
    private headers: Headers = new Headers();
    private requestOptions: RequestOptionsArgs = {};
    constructor(private api: Http) {
    this.headers.set("Accept", "application/json");
    this.headers.set("Content-Type", "application/x-www-form-urlencoded"); 
 
    //this.requestOptions.headers = this.headers;
    // options = new RequestOptions({ headers: this.headers });
    }

    login(): Observable<any> {

        let endPoint = 'https://github.com/login/oauth/authorize';

        return this.api.get(endPoint).map(res => res.json() as any).catch(err => Observable.throw(err));
    }
    getAccessToken(code): Observable<any> {
        debugger;
        let endPoint = 'https://github.com/login/oauth/access_token';

        return this.api.post(endPoint,{
          'client_id':'19efd6e73e2bb73d0e00',
          'client_secret':'b93e41565a19fa43158938765756fb0fa4ef7db4',
          'code':code,
          'redirect_uri':'https://angular-git.stackblitz.io/login'
          },new RequestOptions({ headers: this.headers })).map(res => res.json() as any).catch(err => Observable.throw(err));
    }

}
