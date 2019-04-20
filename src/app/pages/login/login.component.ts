import { Component,OnInit } from "@angular/core";
import { ActivatedRoute,Params,Router } from '@angular/router';
import {LoginService} from "../../services/login.service";

@Component({
    selector:'app-login',
    templateUrl:'./login.component.html'   
})
export class LoginComponent implements OnInit{

 constructor(private router:Router,
 private route:ActivatedRoute,
 private loginService:LoginService,
 ) {
    }

ngOnInit(){
this.route.queryParams.subscribe(
      (params:Params)=>{
        console.log(params["code"]);
        if(params["code"]!=undefined || params["code"]!=null){
            this.loginService.getAccessToken(params["code"]).subscribe(res => {
                console.log(res);
            });
        }
      }
    )
}
onSubmit(){
        //this.router.navigate(['/home']);
         this.loginService.login().subscribe(res => {
                console.log(res);
            });
}
}