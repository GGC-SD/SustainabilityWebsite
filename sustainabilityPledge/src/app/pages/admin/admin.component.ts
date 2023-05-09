import { ThrowStmt } from '@angular/compiler';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { AppUser } from '../../models/app-user';
import { UserService } from '../../services/user/user.service';
import { take } from 'rxjs/operators';
import { GetInvolvedServiceService } from 'src/app/services/get-involved/get-involved-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements AfterViewInit {
  
  listUsers: any=[];
  listInterested: any=[];

  displayedColumns: String[] = ['fullName', 'email', 'isEmailVerified', 'isAdmin'];
  contactsColumns: String[] = ['email', 'name', 'phone'];
  
  constructor(private userService: UserService, private getInvolvedService: GetInvolvedServiceService) { }

  @ViewChild(MatSort) sort : MatSort;
  dataSource: any;
  contactsData: any;
  fetchUsers(){
    this.userService.getAllUsers().pipe(take(1)).subscribe(data => {
      for (const key in data){
        const remaining = { ...data[key]};
        const dataObj = {
             id: key,
             fullName: remaining.fullName,
             email: remaining.email,
             isEmailVerified: remaining.isEmailVerified,
             isAdmin: remaining.isAdmin
           }
           this.listUsers.push(dataObj);
      }
      console.log(this.listUsers)
      this.dataSource = new MatTableDataSource(this.listUsers);
    })
  }

  fetchInterestedInEvents(){
    this.getInvolvedService.getInterestedContact().pipe(take(1)).subscribe(data => {
      for (const key in data){
        const remaining = { ...data[key]};
        const dataObj = {
             id: key,
             email: remaining.email,
             name: remaining.name,
             phone: remaining.phone
           }
           this.listInterested.push(dataObj);
      }
      console.log(this.listInterested)
      this.contactsData = new MatTableDataSource(this.listInterested);
    })

  }

  ngAfterViewInit() {
    this.fetchUsers();
    this.fetchInterestedInEvents();
    
  }

}
