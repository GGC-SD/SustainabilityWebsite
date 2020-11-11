import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AppUser } from '../models/app-user';
import { AuthenticationService } from '../shared/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user$: any;

  constructor(public auth:AuthenticationService) { }

  ngOnInit(): void {
  }


}
