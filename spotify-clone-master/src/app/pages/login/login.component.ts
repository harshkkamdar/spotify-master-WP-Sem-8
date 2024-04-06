import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  name: string | undefined;
  password: string | undefined;
  wrongpass: boolean = false;
  show: boolean = false;
  
  constructor(private Router:Router, private auth:AuthService, private api: ApiService){}

  onNavigateToReg(){
    this.Router.navigate(['/signup']);
  }

  public UsernameFormControl = new FormControl(null,[Validators.required, Validators.email]);
  public PasswordFormControl = new FormControl(null,[Validators.minLength(4)]);

  public userForm!: FormGroup;
  

  ngOnInit(): void {
    this.userForm = new FormGroup({
      username : this.UsernameFormControl,
      password : this.PasswordFormControl,
    })
  }
 
   submit(){
    console.log(this.name, this.password)
    this.api.login(this.name).subscribe(async (res: any) => {
      console.log(res.length)
      if(res.length > 0)
      {
        if (this.password == res[0].password) {
          console.log("RIGHT")
          this.auth.login(),
          this.Router.navigate(['/home']);
        } else {
          console.log("WRONG")
          this.wrongpass = true;
        }
      }else{
          console.log("WRONG")
          this.wrongpass = true;
      }
    });
   }

   onNavigateToHome(){
    /* this.auth.login(),
    this.Router.navigate(['/home']); */
  }
  
}

