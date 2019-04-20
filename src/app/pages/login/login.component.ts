import { Component,OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import {LoginService} from "../../services/login.service";

@Component({
    selector:'app-login',
    templateUrl:'./login.component.html'   
})
export class LoginComponent implements OnInit{

 constructor(private router:Router,private loginService:LoginService) {
    }

ngOnInit(){

}
onSubmit(){
        //this.router.navigate(['/home']);
         this.loginService.login().subscribe(res => {
                console.log(res);
            });
}
}