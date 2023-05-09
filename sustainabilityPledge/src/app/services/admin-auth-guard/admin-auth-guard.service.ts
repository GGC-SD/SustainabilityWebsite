import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { AuthGuard } from '../auth-guard/auth.guard';
import { AuthenticationService } from '../../shared/authentication.service';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard  implements CanActivate{

  constructor(private auth: AuthenticationService, private userService: UserService) { }

  canActivate(): Observable<boolean> {
    return this.auth.user$.pipe(
      switchMap(({uid}) => this.userService.get(uid)),
      map(user => user.isAdmin === true)
    );
  }
}

// import { AppUser } from '../../models/app-user';
// @Injectable()
// export class AdminAuthGuard  implements CanActivate{

//   constructor(private auth: AuthenticationService, private userService: UserService, state: RouterStateSnapshot,  private router : Router) { }

//   canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<boolean> {
    
//     return this.auth.user$.pipe(
//       take(1),
//       map(user => {
//         // this.userService.get(user.uid).subscribe(dbUser => {
//         //   if (dbUser.isAdmin == true){
//         //     this.router.navigate(['/admin'], { queryParams: { returnUrl: state.url } });
//         //   }
//         // })
//         if (user && user.emailVerified) {
//           return true;
//         }
//         else if (user && !user.emailVerified) {
//           this.router.navigate(['/verifyEmailPage'], { queryParams: { returnUrl: state.url } });
//           return false;
//         }
//         if (!user){
//           this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
//           return false;
//         }

//       }), // <-- map to boolean
//       tap(loggedIn => {
//         if (!loggedIn) {
//           console.log('access denied')

//         }
//       })
//     )
//   }
// }


// /** @Injectable()
// export class AuthGuard implements CanActivate {
//   constructor(private auth: AuthenticationService, private router: Router) { }

//   canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    
//     return this.auth.user$.pipe(
//       take(1),
//       map(user => {
//         if (user)
//         user.reload();
//         if (user && user.emailVerified) {
//           return true;
//         }
//         else if (user && !user.emailVerified) {
//           this.router.navigate(['/verifyEmailPage'], { queryParams: { returnUrl: state.url } });
//           return false;
//         }
//         if (!user){
//           this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
//           return false;
//         }

//       }), // <-- map to boolean
//       tap(loggedIn => {
//         if (!loggedIn) {
//           console.log('access denied')

//         }
//       })
//     )
//   }
// } */