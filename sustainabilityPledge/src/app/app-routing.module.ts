import { TransportationComponent } from './transportation/transportation.component';
<<<<<<< HEAD
import { RecyclingComponent } from './recycling/recycling.component';
import { FoodComponent } from './food/food.component';
import { ElectricityComponent } from './electricity/electricity.component';
import { WaterComponent } from './water/water.component';
import { SignupComponent } from './signup/signup.component';
=======
import { ElectricityComponent } from './electricity/electricity.component';
import { RecyclingComponent } from './recycling/recycling.component';
import { FoodComponent } from './food/food.component';
import { WaterComponent } from './water/water.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
>>>>>>> part2
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
<<<<<<< HEAD
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'water', component: WaterComponent},
  {path: 'electricity', component: ElectricityComponent},
  {path: 'food', component: FoodComponent},
  {path: 'recycling', component: RecyclingComponent},
  {path: 'transportation', component: TransportationComponent}
=======
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'login', component: LoginComponent},
  { path: 'water', component: WaterComponent},
  { path: 'food', component: FoodComponent},
  { path: 'recycling', component: RecyclingComponent},
  { path: 'electricity', component: ElectricityComponent},
  { path: 'transportation', component: TransportationComponent},
>>>>>>> part2
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
