import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  userName = '';
  userNameReset = 'Not Reset';
  ResetComplete = false;

  constructor() { 
    setTimeout(() =>{
      this.ResetComplete = true;
    },2000);
  }

  ngOnInit(): void {
  }
  onCreateUser(){
    this.userNameReset = 'UserName Reset complete - New User ' + this.userName;
  }
}
