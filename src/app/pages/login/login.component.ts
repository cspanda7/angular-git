import { Component,OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector:'app-login',
    templateUrl:'./login.component.html'   
})
export class LoginComponent implements OnInit{

 constructor(private router:Router) {
    }

ngOnInit(){

}
onSubmit(){
        this.router.navigate(['/home']);
}
}