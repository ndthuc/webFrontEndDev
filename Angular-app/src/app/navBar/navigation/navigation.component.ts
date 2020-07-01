import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  displayName:string="";
  constructor(private userService: UserService,private authService: AuthService) { }

  ngOnInit() {
    this.userService.getCurrentUser()
					.then(user=> this.displayName = user.displayName!=null? user.displayName: user.email);
		
        console.log(this.displayName);
  }
  Logout(){
    this.authService.logout();
    location.href="/login";
  }

}
