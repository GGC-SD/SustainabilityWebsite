import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { WaterComponent } from './pages/pledge/water/water.component';
import { ElectricityComponent } from './pages/pledge/electricity/electricity.component';
import { FoodComponent } from './pages/pledge/food/food.component';

import { TransportationComponent } from './pages/pledge/transportation/transportation.component';
import { RecyclingComponent } from './pages/pledge/recycling/recycling.component';

//
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {environment} from '../environments/environment';

import { AngularFireAuthModule } from '@angular/fire/auth';

/* Auth service */
import { AuthenticationService } from './shared/authentication.service';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/about/about.component';
import { ChooseUsernameComponent } from './pages/login/login.component';
import { ResultComponent } from './pages/pledge/result/result.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AuthGuard } from './services/auth-guard/auth.guard';
import { ProgressBarComponent } from './pages/pledge/progress-bar/progress-bar.component';
import { FaqComponent } from './pages/faq/faq.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GetInvolvedComponent } from './pages/get-involved/getinvolved.component';
import { NewsComponent } from './pages/news/news.component';
import { EventsComponent } from './pages/events/events.component';
import { UserService } from './services/user/user.service';
import { SignupFormComponent } from './pages/login/signup-form/signup-form.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { VerifyEmailComponent } from './pages/login/verify-email/verify-email.component';
import { AdminAuthGuard } from './services/admin-auth-guard/admin-auth-guard.service';
import { AdminComponent } from './pages/admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { GetInvolvedServiceService } from './services/get-involved/get-involved-service.service';


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
    NavbarComponent,
    GetInvolvedComponent,
    NewsComponent,
    EventsComponent,
    SignupFormComponent,
    ProfileComponent,
    VerifyEmailComponent,
    AdminComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [AuthenticationService,
    AuthGuard,
    AdminAuthGuard,
    UserService,
   GetInvolvedServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
