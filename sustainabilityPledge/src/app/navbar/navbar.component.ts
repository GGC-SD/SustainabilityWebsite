import { Component, OnInit } from '@angular/core';
import { AppUser } from '../models/app-user';
import { AuthenticationService } from '../shared/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  appUser: AppUser;

  constructor(private auth: AuthenticationService) {
    auth.appUser$.subscribe(appUser => this.appUser = appUser);
   }

  ngOnInit(): void {
  }

}
