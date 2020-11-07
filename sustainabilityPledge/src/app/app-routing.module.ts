import { LoginComponent } from './login/login.component';
import { TransportationComponent } from './transportation/transportation.component';

import { RecyclingComponent } from './recycling/recycling.component';
import { FoodComponent } from './food/food.component';
import { ElectricityComponent } from './electricity/electricity.component';
import { WaterComponent } from './water/water.component';

import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChooseUsernameComponent } from './choose-username/choose-username.component';
import { ResultComponent } from './result/result.component';
import { AuthGuard } from './auth.guard';
import {FaqComponent} from './faq/faq.component';
import {GetInvolvedComponent} from './get-involved/getinvolved.component';
import {NewsComponent} from './news/news.component';
import { SignupFormComponent } from './signup-form/signup-form.component';



export const routes: Routes = [

  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent,
  // canActivate: [AuthGuard]
 },

  {path: 'faq',component: FaqComponent},
  {path: 'about',component: LoginComponent},
  {path: 'getinvolved', component: GetInvolvedComponent},
  {path: 'news',component: NewsComponent},

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
  {path: 'login',component: ChooseUsernameComponent
},
{path: 'result', component: ResultComponent,
canActivate: [AuthGuard]},
{path: 'signUpForm', component: SignupFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
