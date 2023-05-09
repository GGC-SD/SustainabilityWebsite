import { ThrowStmt } from '@angular/compiler';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { AppUser } from '../../models/app-user';
import { UserService } from '../../services/user/user.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements AfterViewInit {
  
  listUsers: any=[];
  finalObjects = [];
  displayedColumns: String[] = ['fullName', 'email', 'isEmailVerified', 'isAdmin'];
  
  
  constructor(private userService: UserService) { }

  @ViewChild(MatSort) sort : MatSort;
  dataSource: any;
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
      
        // this.listUsers = Object.keys(data).map(key => {
        //   const position = data[key];
        //   const dataObj = {
        //     id: key,
        //     fullName: data.fullName,
        //     email: data.email,
        //     isEmailVerified: data.isEmailVerified,
        //     isAdmin: data.isAdmin
        //   }
        //   return dataObj;
        // })
      //console.log('List of users', this.listUsers);
      
      this.dataSource = new MatTableDataSource(this.listUsers);
    })
  }

  ngAfterViewInit() {
    this.fetchUsers();

    
  }

}
