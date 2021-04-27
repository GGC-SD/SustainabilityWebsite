import { LoginComponent } from './pages/about/about.component';
import { TransportationComponent } from './pages/pledge/transportation/transportation.component';

import { RecyclingComponent } from './pages/pledge/recycling/recycling.component';
import { FoodComponent } from './pages/pledge/food/food.component';
import { ElectricityComponent } from './pages/pledge/electricity/electricity.component';
import { WaterComponent } from './pages/pledge/water/water.component';

import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChooseUsernameComponent } from './pages/login/login.component';
import { ResultComponent } from './pages/pledge/result/result.component';
import { AuthGuard } from './services/auth-guard/auth.guard';
import {FaqComponent} from './pages/faq/faq.component';
import {GetInvolvedComponent} from './pages/get-involved/getinvolved.component';
import {NewsComponent} from './pages/news/news.component';
import { EventsComponent } from './pages/events/events.component';
import {ProfileComponent} from './pages/profile/profile.component';
import { SignupFormComponent } from './pages/login/signup-form/signup-form.component';
import { VerifyEmailComponent } from './pages/login/verify-email/verify-email.component';
import { AdminAuthGuard } from './services/admin-auth-guard/admin-auth-guard.service';
import { AdminComponent } from './pages/admin/admin.component';



export const routes: Routes = [

  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent },
  {path: 'faq',component: FaqComponent},
  {path: 'about',component: LoginComponent},
  {path: 'getinvolved', component: GetInvolvedComponent},
  {path: 'news',component: NewsComponent},
  {path: 'events', component: EventsComponent},
  {path: 'profile',component: ProfileComponent},
  {path: 'verifyEmailPage', component: VerifyEmailComponent},
  {path: 'signUpForm', component: SignupFormComponent},
  {path: 'login',component: ChooseUsernameComponent},

  {path: 'water', component: WaterComponent,
  canActivate: [AuthGuard]},
  {path: 'electricity', component: ElectricityComponent,
  canActivate: [AuthGuard]},
  {path: 'food', component: FoodComponent,
  canActivate: [AuthGuard]},
  {path: 'recycling', component: RecyclingComponent,
  canActivate: [AuthGuard]},
  {path: 'transportation', component: TransportationComponent,
   canActivate: [AuthGuard]},
  {path: 'result', component: ResultComponent,
   canActivate: [AuthGuard]},
  {path: 'admin', component: AdminComponent,
   canActivate: [AdminAuthGuard]}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
