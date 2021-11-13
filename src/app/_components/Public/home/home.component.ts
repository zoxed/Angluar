import { Component } from '@angular/core';
import { AuthService } from 'src/app/_services/services/auth.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(public authService: AuthService) { }
}
