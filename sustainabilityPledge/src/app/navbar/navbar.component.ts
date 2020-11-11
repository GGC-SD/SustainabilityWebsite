import { Component, OnInit } from '@angular/core';
import { AdminAuthGuard } from '../admin-auth-guard.service';
import { AppUser } from '../models/app-user';
import { AuthenticationService } from '../shared/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  appUser: AppUser;

  constructor(public auth: AuthenticationService, public admin:AdminAuthGuard) {
    auth.appUser$.subscribe(appUser => this.appUser = appUser);
   }

  ngOnInit(): void {
  }

}
