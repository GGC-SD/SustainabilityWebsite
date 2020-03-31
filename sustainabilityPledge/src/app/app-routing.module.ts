import { TransportationComponent } from './transportation/transportation.component';

import { RecyclingComponent } from './recycling/recycling.component';
import { FoodComponent } from './food/food.component';
import { ElectricityComponent } from './electricity/electricity.component';
import { WaterComponent } from './water/water.component';
import { SignupComponent } from './signup/signup.component';

import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ChooseUsernameComponent } from './choose-username/choose-username.component';


const routes: Routes = [

  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login',component: LoginComponent},
  {path: 'water', component: WaterComponent},
  {path: 'electricity', component: ElectricityComponent},
  {path: 'food', component: FoodComponent},
  {path: 'recycling', component: RecyclingComponent},
  {path: 'transportation', component: TransportationComponent},
  {path: 'choose-username',component: ChooseUsernameComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
