import { Component, inject } from '@angular/core';
import { BG_IMG_URL, LOGO_URL } from '../../constants/config';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
logoUrl = LOGO_URL;
 bgUrl = BG_IMG_URL;

 email!: string;
 password!: string;
 loginService = inject(LoginService);
 router = inject(Router);

 onSubmit() {
  //console.log(this.email, this.password);  
  // validate email and password
  if(!this.email || !this.password) {
    alert("provide email or password");
    return;
  }

  // if email and password is correct lets login the user
 this.loginService.login(this.email, this.password);
 
 // redirect To browse page
 this.router.navigateByUrl("/browse");

 }
}
