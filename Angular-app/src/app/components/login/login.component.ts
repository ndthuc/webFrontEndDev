import { Component, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  tryFirebaseLogin(){
    
  }
  tryGoogleLogin(){

  }
  // @Output() submitEM = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

}
