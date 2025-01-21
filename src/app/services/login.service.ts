import { Injectable, inject } from "@angular/core";
import { Router } from "@angular/router";

export interface LoginObject {
    userName: string,
    password: string 
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  router = inject(Router)

  userName!: string;

  login(loginObj: LoginObject) {
    if(loginObj.userName === 'admin' && loginObj.password === '123456') {
      this.router.navigateByUrl('/dashboard')
    } else {
      alert('Wrong Credentials')
    }
  }

}