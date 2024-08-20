import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../serives/auth.service';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false; 

  constructor(private auth: AuthService) {
   
  }
  ngOnInit() {
    this.isLoggedIn = this.auth.isLoggedIn; 
  }

  login() {
    this.auth.login();
    this.isLoggedIn = true;
  }

  logout() {
    this.auth.logout();
    this.isLoggedIn = false;
  }
}

