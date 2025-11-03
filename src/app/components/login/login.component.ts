import { Component, inject } from '@angular/core';
import { LoginService } from '../../service/login/login.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  name:string = ''
  password:string = ''
  loginService = inject(LoginService)
  router=inject(Router)

  login() {
    this.loginService.login(this.name, this.password);
    this.router.navigate(["/articulos"]);
  }
}
