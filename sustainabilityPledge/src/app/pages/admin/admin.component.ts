import { ThrowStmt } from '@angular/compiler';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { AppUser } from '../../models/app-user';
import { UserService } from '../../services/user/user.service';


const ELEMENT_DATA: AppUser[] = [{
  fullName: 'Angel Mercado',
  email: 'angel.mdo.rdz@gmail.com',
  isEmailVerified: true,
  isAdmin: true
}]

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements AfterViewInit {
  users$;
  
  displayedColumns: String[] = ['fullName', 'email', 'isEmailVerified', 'isAdmin'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor(userService: UserService) { }

  @ViewChild(MatSort) sort : MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

}
