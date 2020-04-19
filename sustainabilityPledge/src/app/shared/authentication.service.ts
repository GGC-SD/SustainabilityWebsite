import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
 
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

.createUserWithEmailAndPassword(email, password)
.then(res => {
console.log('You are Successfully signed up!', res);
this.router.navigate(['/home']);
})
.catch(error => {
console.log('Something is wrong:', error.message);
});
}
 
/* Sign in */
SignIn(email: string, password: string) {
    
this.angularFireAuth


.signInWithEmailAndPassword(email, password)
.then(res => {
console.log('You are Successfully logged in!');
this.router.navigate(['/home']);
}
)
.catch(err => {
console.log('Something is wrong:',err.message);
});
return !!localStorage.getItem('token')
}
 
/* Sign out */
SignOut() {
this.angularFireAuth

.signOut();
}

// loggedIn(){
//     this.router.navigate(['/home']);
//     return !!localStorage.getItem('token')

// }

private updateUserData(userData) {
    // Sets user data to firestore on login
   // const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data = { 
      uid: userData.uid, 
      email: userData.email, 
      displayName: userData.displayName, 
      photoURL: userData.photoURL
    } 
}

 
}