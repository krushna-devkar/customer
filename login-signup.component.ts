import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login, Signup } from 'src/app/shared/model/customer.model';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit{
  isshow =false;
  signupForm! :FormGroup;
  loginForm!:FormGroup;
  constructor(private fb:FormBuilder,private http:HttpClient,private route:Router){}

  ngOnInit(): void {
    this.signupForm =this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required]
    })

    //login
    this.loginForm = this.fb.group({
      email :['',Validators.required],
      password:['',Validators.required]
    })
  }
  submitsignup(){
    this.http.post<Signup>("http://localhost:3000/signup",this.signupForm.value).subscribe(res=>{
      alert("user signup sucessfully!!");
      this.signupForm.reset();
    })
  }
  loginuser(){
    this.http.get<Login[]>("http://localhost:3000/signup").subscribe(res=>{
      //match emial & password
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password ; 
      })
      if(user){
        alert("sucessfully login!!")
        this.loginForm.reset();
        this.route.navigate(['/customerList']);
        //storing data in local storage
        localStorage.setItem('logindata',JSON.stringify(user))
      }else{
        alert("user can not find these credentials")
        this.loginForm.reset()
  
      }
    }
    )
  }
  signUp(){
    this.isshow = true;
  }

  login(){
    this.isshow=false;
  }
}
