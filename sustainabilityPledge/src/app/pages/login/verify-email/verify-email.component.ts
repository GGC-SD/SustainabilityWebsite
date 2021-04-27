import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../shared/authentication.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {

  constructor(public authenticationService:AuthenticationService) { }

  resendEmail(){
      this.authenticationService.ResendEmailVerfication();
  }
  ngOnInit(): void {
  }

}
