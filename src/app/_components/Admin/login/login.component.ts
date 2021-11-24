import { AuthService } from '../../../_services/services/auth.service';
import { Component } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  invalidLogin: boolean = false; 

  constructor(private authService: AuthService, private router: Router) { }

  signIn(credentials:any) {
    
    this.authService.login(credentials)
      .subscribe(result => { 
        if (result)
          this.router.navigate(['/']);
        else  
          this.invalidLogin = true; 
      });
  }
}
