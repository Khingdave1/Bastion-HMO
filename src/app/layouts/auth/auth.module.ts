import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { SigninComponent } from 'src/app/modules/signin/signin.component';
import { SignupComponent } from 'src/app/modules/signup/signup.component';



@NgModule({
  declarations: [
    AuthComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AuthModule { }
