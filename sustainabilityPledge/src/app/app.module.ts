import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { WaterComponent } from './water/water.component';
import { ElectricityComponent } from './electricity/electricity.component';
import { FoodComponent } from './food/food.component';
import { RecyclingComponent } from './recycling/recycling.component';
import { TransportationComponent } from './transportation/transportation.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    WaterComponent,
    ElectricityComponent,
    FoodComponent,
    RecyclingComponent,
    TransportationComponent
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
