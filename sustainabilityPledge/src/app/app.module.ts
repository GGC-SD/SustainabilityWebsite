import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD

=======
import { LoginComponent } from './login/login.component';
>>>>>>> eb2487d59369808879d3d6134cb2ed78b8e821a8
import { SignupComponent } from './signup/signup.component';
import { WaterComponent } from './water/water.component';
import { ElectricityComponent } from './electricity/electricity.component';
import { FoodComponent } from './food/food.component';
<<<<<<< HEAD

import { TransportationComponent } from './transportation/transportation.component';
import { RecyclingComponent } from './recycling/recycling.component';

//
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {environment} from '../environments/environment';

import { AngularFireAuthModule } from "@angular/fire/auth";

/* Auth service */
import { AuthenticationService } from './shared/authentication.service';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ChooseUsernameComponent } from './/choose-username/choose-username.component';

//
=======
import { RecyclingComponent } from './recycling/recycling.component';
import { TransportationComponent } from './transportation/transportation.component';

>>>>>>> eb2487d59369808879d3d6134cb2ed78b8e821a8


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
<<<<<<< HEAD


=======
    LoginComponent,
>>>>>>> eb2487d59369808879d3d6134cb2ed78b8e821a8
    SignupComponent,
    WaterComponent,
    ElectricityComponent,
    FoodComponent,
<<<<<<< HEAD

    TransportationComponent,
    RecyclingComponent,
    LoginComponent,
    ChooseUsernameComponent,
  
  

=======
    RecyclingComponent,
    TransportationComponent
>>>>>>> eb2487d59369808879d3d6134cb2ed78b8e821a8
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule
  


  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
