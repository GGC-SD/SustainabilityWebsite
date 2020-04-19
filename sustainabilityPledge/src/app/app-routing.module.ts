import { LoginComponent } from './login/login.component';
import { TransportationComponent } from './transportation/transportation.component';

import { RecyclingComponent } from './recycling/recycling.component';
import { FoodComponent } from './food/food.component';
import { ElectricityComponent } from './electricity/electricity.component';
import { WaterComponent } from './water/water.component';
import { SignupComponent } from './signup/signup.component';

import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseUsernameComponent } from './choose-username/choose-username.component';
import { AuthGuard } from './auth.guard';



const routes: Routes = [

  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent,
  canActivate: [AuthGuard]
 },
  {path: 'signup', component: SignupComponent,
  canActivate: [AuthGuard]},

  {path: 'team',component: LoginComponent},

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

 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }