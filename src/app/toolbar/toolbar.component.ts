import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  isUserLoggedIn:boolean;
  constructor(private dataSharingService:DataSharingService,private userService:UserService) { 
    this.dataSharingService.isUserLoggedIn.subscribe(value=>{
      this.isUserLoggedIn=value;
    });
  }
  onLogout(){
    this.userService.logout();
  }
  ngOnInit() {
  }

}
