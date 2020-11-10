import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import * as firebase from 'firebase';
import { UserService } from '../user.service';
import { last, switchMap } from 'rxjs/operators';
import { AppUser } from '../models/app-user';

// import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})

export class AuthenticationService {
    user$: Observable<firebase.User>;

    constructor(private angularFireAuth: AngularFireAuth, private router: Router, private route: ActivatedRoute, private userService: UserService) {
        ; this.user$ = angularFireAuth.authState
    }


    /* Sign up */
    SignUp(email: string, password: string, firstName: String, lastName) {
        var fullName = firstName + ' ' + lastName;
        this.angularFireAuth
            .createUserWithEmailAndPassword(email, password).then(() => this.angularFireAuth.currentUser.then(u => u.sendEmailVerification()).then(() => this.angularFireAuth.currentUser.then(u => u.updateProfile({ displayName: fullName, photoURL: "" }))
                .then(() => {
                    console.log('Please verify your email');
                    alert('Please verify your email');
                }).catch((error) => {
                    console.log('Error: ' + error);
                }))
                .then(res => {

                    console.log('You are Successfully signed up!', res);

                })
                .catch(error => {
                    console.log('Something is wrong:', error.message);
                }));


    }



    /* Sign in */
    SignIn(email: string, password: string) {
        let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
        localStorage.setItem('returnUrl', returnUrl);
        this.angularFireAuth
            .signInWithEmailAndPassword(email, password)
            .then(res => {
                console.log('You are Successfully logged in!');
                //this.router.navigate(['/home']);
            }
            )
            .catch(err => {
                console.log('Something is wrong:', err.message);
            });
        return !!localStorage.getItem('token')
    }

    /* Sign out */
    SignOut() {
        this.angularFireAuth
            .signOut();
    }

    ResendEmailVerfication() {
        this.angularFireAuth
            .currentUser.then(u => u.sendEmailVerification())
            .then(() => {
                console.log('Please verify your email');
                alert('Please verify your email');
            }).catch((error) => {
                console.log('Error: ' + error);
            });
    }

    get appUser$() : Observable<AppUser>{
        return this.user$.pipe(
            switchMap(user => this.userService.get(user.uid)));
    }

}



