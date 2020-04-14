import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { WaterComponent } from './water/water.component';
import { ElectricityComponent } from './electricity/electricity.component';
import { FoodComponent } from './food/food.component';

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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,


    SignupComponent,
    WaterComponent,
    ElectricityComponent,
    FoodComponent,

    TransportationComponent,
    RecyclingComponent,
    LoginComponent,
    ChooseUsernameComponent,

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
