import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WaterComponent } from './water/water.component';
import { ElectricityComponent } from './electricity/electricity.component';
import { FoodComponent } from './food/food.component';

import { TransportationComponent } from './transportation/transportation.component';
import { RecyclingComponent } from './recycling/recycling.component';

//
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {environment} from '../environments/environment';

import { AngularFireAuthModule } from '@angular/fire/auth';

/* Auth service */
import { AuthenticationService } from './shared/authentication.service';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ChooseUsernameComponent } from './/choose-username/choose-username.component';
import { ResultComponent } from './result/result.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AuthGuard } from './auth.guard';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { FaqComponent } from './faq/faq.component';
import { NavbarComponent } from './navbar/navbar.component';


//


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WaterComponent,
    ElectricityComponent,
    FoodComponent,
    TransportationComponent,
    RecyclingComponent,
    LoginComponent,
    ChooseUsernameComponent,
    ResultComponent,
    TopBarComponent,
    ProgressBarComponent,
    FaqComponent,
    NavbarComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [AuthenticationService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
