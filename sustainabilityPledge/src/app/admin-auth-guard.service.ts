import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { AuthGuard } from './auth.guard';
import { AuthenticationService } from './shared/authentication.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard  implements CanActivate{

  constructor(private auth: AuthenticationService, private userService: UserService) { }

  canActivate(): Observable<boolean> {
    return this.auth.user$.pipe(
      switchMap(({uid}) => this.userService.get(uid)),
      map(user => user.isAdmin)
    );
  }
}
