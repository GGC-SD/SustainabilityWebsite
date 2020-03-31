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
import { LoginComponent } from './login/login.component';
import { ChooseUsernameComponent } from './choose-username/choose-username.component';


const routes: Routes = [

  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'signup', component: SignupComponent},
<<<<<<< HEAD
  {path: 'login',component: LoginComponent},
=======
  {path: 'login', component: LoginComponent},
>>>>>>> eb2487d59369808879d3d6134cb2ed78b8e821a8
  {path: 'water', component: WaterComponent},
  {path: 'electricity', component: ElectricityComponent},
  {path: 'food', component: FoodComponent},
  {path: 'recycling', component: RecyclingComponent},
<<<<<<< HEAD
  {path: 'transportation', component: TransportationComponent},
  {path: 'choose-username',component: ChooseUsernameComponent}
=======
  {path: 'transportation', component: TransportationComponent}
>>>>>>> eb2487d59369808879d3d6134cb2ed78b8e821a8

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
