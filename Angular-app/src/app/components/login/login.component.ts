import { Component, OnInit, Output } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(public authService: AuthService,
    private router: Router,) { }

  tryGoogleLogin(){
    this.authService.signinGmail()
     .then(res=>{
       // this.router.navigate(["/home"]);
       location.href="/admin"
       }).catch(err=>{
         console.log(err); 
        
       })
   }
  
  // @Output() submitEM = new EventEmitter()

  

  ngOnInit(): void {
  }

}
