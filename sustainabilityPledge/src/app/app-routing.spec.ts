// Import all needed components and services
import { AuthGuard } from './services/auth-guard/auth.guard';
import { ResultComponent } from './pages/pledge/result/result.component';
import { AppComponent } from './app.component';
import { WaterComponent } from './pages/pledge/water/water.component';
import { TransportationComponent } from './pages/pledge/transportation/transportation.component';
import { RecyclingComponent } from './pages/pledge/recycling/recycling.component';
import { LoginComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { GetInvolvedComponent } from './pages/get-involved/getinvolved.component';
import { FoodComponent } from './pages/pledge/food/food.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ElectricityComponent } from './pages/pledge/electricity/electricity.component';
import { AuthenticationService } from './shared/authentication.service';

// Import libraries needed for testing
import { TestBed, fakeAsync, async, ComponentFixture, tick } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { Router, RouterLinkWithHref, ActivatedRoute, convertToParamMap } from "@angular/router";
import { DebugElement, Component } from '@angular/core';
import { Location } from "@angular/common";
import { By } from '@angular/platform-browser';
import { Observable, of, Subject} from 'rxjs';

// Import the routes exported from app-routing.module.ts
import { routes } from './app-routing.module';

fdescribe('Router: App', () => {
    let router: Router;
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>; // for testing component
    let debugElement: DebugElement;
    let location: Location; // Helps to interact with browsers URL

    beforeEach(async(() => {
        TestBed.configureTestingModule({    // Configure the TestBed configuration
            imports: [RouterTestingModule.withRoutes(routes)],  // incorporate declared routes into test
            declarations: [
                ResultComponent,
                WaterComponent,
                TransportationComponent,
                RecyclingComponent,
                LoginComponent,
                HomeComponent,
                GetInvolvedComponent,
                FoodComponent,
                FaqComponent,
                ElectricityComponent
            ],
            providers: [AuthenticationService, AuthGuard]
        }).compileComponents();
    }))

    beforeEach(() => {
        // Initialize router and location objects
        router = TestBed.inject(Router);
        location = TestBed.inject(Location);


        fixture = TestBed.createComponent(AppComponent);
        debugElement = fixture.debugElement;

        router.initialNavigation(); // Helps navigate to the default route
    })

    // Routing is asynchronous operation, so must be declared as async
    // Go to default path
    it('should test redirection to default path (async)', async(() => {
        fixture.detectChanges();    // Forces browser to go to default route

        // After async operation is completed, check to see if path is /home (default route)
        fixture.whenStable().then(() => {
            expect(location.path()).toBe('/home');
        })
    }))


    // "" goes to home
    // router.navigate must be done with fakeAsync?
    it('navigate to "" redirects to /home', fakeAsync(() => {
        fixture.whenStable().then(() => {
            router.navigate(['']);
        })
        
        tick();
        expect(location.path()).toBe('/home');
    }))

    // Home
    it('navigate to "home" takes you to /home', fakeAsync(() => {
        fixture.whenStable().then(() => {
            router.navigate(['']);
        })
        
        tick();
        expect(location.path()).toBe('/home');
    }))

    // FAQ
    it('navigate to "faq" takes you to /faq', fakeAsync(() => {
        fixture.whenStable().then(() => {
            router.navigate(['faq']);
        })
        
        tick();
        expect(location.path()).toBe('/faq');
    }))

    // Go from default route to /about
    it('navigate to "about" takes you to /about', fakeAsync(() => {
        fixture.detectChanges();

        fixture.whenStable().then(() => {
            router.navigate(['about']);
        })
        
        tick();
        expect(location.path()).toBe('/about');
    }))

    

    it('navigate to "getinvolved" takes you to /getinvolved', fakeAsync(() => {
        fixture.whenStable().then(() => {
            router.navigate(['getinvolved']);
        })
        
        tick();
        expect(location.path()).toBe('/getinvolved');
    }))

    
})