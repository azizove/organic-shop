import { Component, OnInit } from '@angular/core';

import { AppLoginService } from '../app-login.service';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent implements OnInit {

  constructor(private authService: AppLoginService) { }

  ngOnInit() {
  }

  logInWithGoogle() {
    this.authService.logInWithGoogle()
  }

}
