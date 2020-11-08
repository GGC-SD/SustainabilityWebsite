import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import * as firebase from 'firebase';
import { UserService } from '../user.service';
import { last } from 'rxjs/operators';

// import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})

export class AuthenticationService {
    userData: Observable<firebase.User>;

    constructor(private angularFireAuth: AngularFireAuth, private router: Router, private route: ActivatedRoute, private userService: UserService) {
        ; this.userData = angularFireAuth.authState
    }


    /* Sign up */
    SignUp(email: string, password: string) {
        this.angularFireAuth
            .createUserWithEmailAndPassword(email, password).then(() => this.angularFireAuth.currentUser.then(u => u.sendEmailVerification())
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
            });
            
    }



    /* Sign in */
    SignIn(email: string, password: string) {
        let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
        localStorage.setItem('returnUrl', returnUrl);
        this.angularFireAuth
            .signInWithEmailAndPassword(email, password)
            .then(res => {
                console.log('You are Successfully logged in!');
                this.router.navigate(['/home']);
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

    ResendEmailVerfication(){
        this.angularFireAuth
        .currentUser.then(u => u.sendEmailVerification())
            .then(() => {
                console.log('Please verify your email');
                alert('Please verify your email');
            }).catch((error) => {
                console.log('Error: ' + error);
            });
        }

    UpdateUserData(firstName: String, lastName: String, phone: string) {
        // Sets user data to firestore on login
        // const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
        firebase.auth().currentUser.displayName =  firstName + ' ' + lastName;
        firebase.auth().currentUser.phoneNumber = phone;
        }
    }



