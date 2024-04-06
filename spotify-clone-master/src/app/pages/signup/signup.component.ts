import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  
  email: string | undefined;
  password: string | undefined;
  cpassword: string | undefined;
  wrongpass: boolean = false;
  
  constructor(private Router:Router, private apiService: ApiService){}

  ngOnInit(): void {
  }

  onNavigateToLogin(){
    this.Router.navigate(['/','login']);
  }

  signup(){
    let user = {
      name: this.email,
      password: this.password
    }
    if(this.email==""||this.password==""){
      this.wrongpass=true;
    }else{
      if(this.password == this.cpassword){
        this.apiService.signup(user).subscribe(async (res: any) => {
          this.Router.navigate(['login'])
        });
      }else{
        this.wrongpass = true;
      }
    }
  }
}

