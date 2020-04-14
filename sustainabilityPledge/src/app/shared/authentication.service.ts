import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
 
@Injectable({
providedIn: 'root'
})
 
export class AuthenticationService {
userData: Observable<firebase.User>;
 
constructor(private angularFireAuth: AngularFireAuth,private router: Router) {
this.userData = angularFireAuth.authState;
}
 
/* Sign up */
SignUp(email: string, password: string) {
this.angularFireAuth
.auth
.createUserWithEmailAndPassword(email, password)
.then(res => {
console.log('You are Successfully signed up!', res);
})
.catch(error => {
console.log('Something is wrong:', error.message);
});
}
 
/* Sign in */
SignIn(email: string, password: string) {
this.angularFireAuth
.auth
.signInWithEmailAndPassword(email, password)
.then(res => {
console.log('You are Successfully logged in!');
this.router.navigate(['/home']);
})
.catch(err => {
console.log('Something is wrong:',err.message);
});
}
 
/* Sign out */
SignOut() {
this.angularFireAuth
.auth
.signOut();
}
 
}