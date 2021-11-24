import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AdminAuthGuard extends AuthGuard {

  canActivate() {
    let isAuthenticated = super.CanActivate();
    if (!isAuthenticated)
      return false; 

    if (this.AuthService.currentUser.admin)
      return true; 

    this.router.navigate(['/no-access']);
    return false;
  }
}
