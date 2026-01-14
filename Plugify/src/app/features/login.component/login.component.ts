import { Component,OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder,Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Nba } from '../../services/nba';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login.component',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit{
  loginForm!:FormGroup;

  constructor(private formBuilder :FormBuilder,private service: Nba,private router: Router){}

  ngOnInit(){
    this.buildForm();
  }

  private buildForm(): void{
    this.loginForm= this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
    });
  }

  onSubmit(){
    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched();
      return;
    }
    this.service.loginFlaskAPI({email:this.loginForm.get("email")?.value,password:this.loginForm.get("password")?.value}).subscribe(res=>{
      
      this.router.navigate(['/dashboard']);
    })
  }

}
