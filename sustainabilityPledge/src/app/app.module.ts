import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
=======
import { LoginComponent } from './login/login.component';
>>>>>>> part2
import { SignupComponent } from './signup/signup.component';
import { WaterComponent } from './water/water.component';
import { ElectricityComponent } from './electricity/electricity.component';
import { FoodComponent } from './food/food.component';
<<<<<<< HEAD
import { TransportationComponent } from './transportation/transportation.component';
import { RecyclingComponent } from './recycling/recycling.component';
=======
import { RecyclingComponent } from './recycling/recycling.component';
import { TransportationComponent } from './transportation/transportation.component';

>>>>>>> part2

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
<<<<<<< HEAD
=======
    LoginComponent,
>>>>>>> part2
    SignupComponent,
    WaterComponent,
    ElectricityComponent,
    FoodComponent,
<<<<<<< HEAD
    TransportationComponent,
    RecyclingComponent
=======
    RecyclingComponent,
    TransportationComponent
>>>>>>> part2
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
