// import { Component } from '@angular/core';
// import { Observable, from } from 'rxjs';
// import { AuthenticationService } from './../shared/authentication.service';
// import { ChooseUsernameComponent } from './choose-username.component';

// describe('ChooseUsernameComponent', () => {
//   let component: ChooseUsernameComponent;
//   let service: AuthenticationService;

//   beforeEach(() => {
//     // Create fake service and disconnect from database for unit test
//     service = new AuthenticationService(null, null, null);

//     // Initialize ChooseUsernameComponent with fake service to decouple
//     component = new ChooseUsernameComponent(service);
//   });

//   it('should call the database to save the new user when the user signs up', () => {
//     spyOn(service, 'SignIn').and.returnValue(from([ id: 1 ]))
//   })

//   it('should create a new user with specified email and password when the user signs up', () => {
//     let user = [];

//     spyOn(service, 'SignUp').and.callFake((component.email, component.password))
//   })

// //   // it('should allow the user to log in with matched username and password', () => {
// //   //   let user = ["bob@ggc.edu", "12345"];

// //   //   spyOn(service, 'SignIn').and.callFake(() => {

// //   //     return true
// //   //   })
// //   // })
// // });
